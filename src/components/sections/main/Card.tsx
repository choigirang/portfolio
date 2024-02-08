import useMoveScroll from '../../../hooks/useMoveScroll';
import { SkillCardProps } from '../../../type/sections';

import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @param props 메인 페이지에서 넘겨받을 항목에 따른 데이터
 * @returns 이미지 및 링크 연결
 */
export default function Card(props: SkillCardProps) {
  const { src, txt, bedge, color } = props;
  const { scrollToPage } = useMoveScroll();

  return (
    <Container onClick={() => scrollToPage(bedge)}>
      <Img src={`${src}.webp`} alt={`${src}-img`} />
      <Text sx={{ '.bedge': { backgroundColor: color } }}>
        <span className="bedge">{bedge}</span>
        <span className="main-txt">{txt}</span>
      </Text>
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: 10,
  backgroundColor: '#1A1B24',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    img: {
      transform: 'scale(1.1)',
      opacity: 1,
    },

    '.main-txt': {
      textShadow: '4px 4px 2px black',
    },
  },
}));

const Img = MuiStyled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.5,
  transition: 'all .5s',
}));

const Text = MuiStyled('div')(({ theme }) => ({
  position: 'absolute',
  left: 30,
  bottom: 20,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: 10,

  '.bedge': {
    display: 'inline',
    color: 'white',
    padding: '5px 10px',
    backgroundColor: 'red',
    borderRadius: 10,
    fontWeight: 900,
  },

  '.main-txt': {
    fontFamily: 'SCoreDream',
    fontSize: 30,
    color: 'white',
    transition: 'all .5s',
  },
}));
