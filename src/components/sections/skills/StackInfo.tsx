import { SelectStackType } from '../../../type/sections';

import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @param stackInfo 선택한 스택 데이터
 * @param detailStack 스택데이터의 상세 설명
 * @returns 스택 별 설명 매핑
 */
export default function StackInfo(props: {
  stackInfo: SelectStackType | undefined;
  detailStack: SelectStackType | undefined;
}) {
  const { stackInfo, detailStack } = props;

  const mappingDescription = (des: string[], link: string | string[]) => {
    if (!Array.isArray(link)) return;

    // 설명에 맞는 링크 매핑
    return des.map((each, idx) =>
      link[idx] !== '' ? (
        <Description href={link[idx]} target="_blank" key={each}>
          • {each}
        </Description>
      ) : (
        <span>• {each}</span>
      ),
    );
  };

  if (!stackInfo || !detailStack) return <div>스택에 관한 정보가 없습니다.</div>;

  return (
    <Container $color={stackInfo.color}>
      <StackName $color={stackInfo.color}>
        <img src={`https://cdn.simpleicons.org/${detailStack.name}`} alt="icon" width="100" height="100" />
        <h3>{detailStack.displayName}</h3>
      </StackName>
      <StackDetail>{mappingDescription(detailStack.description, detailStack.link)}</StackDetail>
    </Container>
  );
}

const Container = MuiStyled('div')<{ $color: string }>(({ $color, theme }) => ({
  width: '100%',
  display: 'grid',
  padding: '5%',
  backgroundColor: '#1A1B24',
  color: 'white',
  borderRadius: 10,
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'minmax(100px, 200px) auto',
  gap: 50,

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    gridTemplateColumns: '150px auto',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    gridTemplateColumns: '100px auto',
  },
}));

const StackName = MuiStyled('div')<{ $color: string }>(({ $color, theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,

  h3: {
    color: 'white',
    textShadow: '3px 3px 3px #424242',
    fontWeight: 600,
    backgroundColor: $color,
    padding: '5px 20px',
    borderRadius: 10,
  },

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    h3: {
      fontWeight: 400,
      padding: '5px 10px',
      fontSize: 18,
    },
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    h3: {
      fontWeight: 400,
      padding: '5px 10px',
      fontSize: 14,
    },
  },
}));

const StackDetail = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}));

const Description = MuiStyled('a')(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 18,
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    fontSize: 14,
  },
}));
