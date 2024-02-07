import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @param flipCard 카드 클릭 상태
 * @param description 매핑으로 뿌려질 각 프로젝트 설명 데이터
 * @returns 클릭 시 카드 뒤집기로 설명문
 */
export default function DescriptionContent(props: { flipCard: boolean; description: Array<string> }) {
  const { flipCard, description } = props;

  const parseDescription = (text: string) => {
    const parts = text.split('*');

    return parts
      .map((part, index) => {
        if (part === '') return null;
        return index % 2 === 0 ? <span key={index}>{part}</span> : <strong key={index}>{part}</strong>;
      })
      .filter(Boolean);
  };

  return (
    <BackContent flipCard={flipCard}>
      <FlipTxt flipCard={flipCard}>
        {description.map(item => (
          <div key={item}>
            <span>✅</span>
            <span>{parseDescription(item)}</span>
          </div>
        ))}
      </FlipTxt>
    </BackContent>
  );
}

const BackContent = MuiStyled('div')<{ flipCard: boolean }>(({ flipCard, theme }) => ({
  height: '100%',
  position: 'absolute',
  top: 0,
  padding: '5%',
  backfaceVisibility: 'hidden',
  visibility: flipCard ? 'visible' : 'hidden',
  transition: 'all 1s',
  color: 'white',
  overflow: 'scroll',

  ...(!flipCard && {
    visibility: 'hidden',
  }),
}));

const FlipTxt = MuiStyled('div')<{ flipCard: boolean }>(({ flipCard, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  visibility: flipCard ? 'visible' : 'hidden',
  transform: flipCard ? 'rotateY(180deg)' : 'rotateY(0)',
  gap: 30,

  div: {
    display: 'flex',
    gap: 20,
  },

  span: {
    lineHeight: '20px',
  },

  strong: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));
