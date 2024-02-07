import useMoveScroll from '../../../hooks/useMoveScroll';

import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @returns 프로젝트 링크 개별 카드
 */
export default function LinkProjectCard() {
  const { scrollToPage } = useMoveScroll();

  return (
    <Container onClick={() => scrollToPage('project')}>
      <Img
        src="project-large.webp"
        srcSet="project-small.webp 400w, project-medium.webp 600w, project-large.webp 900w"
        alt="project-img"
      />
      <Text>
        <span className="bedge">project</span>
        <span className="main-txt">프로젝트 둘러보기</span>
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
    fontWeight: 700,
  },

  '.main-txt': {
    fontFamily: 'SCoreDream',
    fontSize: 32,
    color: 'white',
    transition: 'all .5s',
  },

  '@media (min-width: 768px) and (max-width: 1023px)': {
    '.bedge': {
      fontSize: 16,
      fontWeight: 500,
    },

    '.main-txt': {
      fontSize: 32,
      color: 'white',
      transition: 'all .5s',
    },
  },

  '@media (max-width: 768px)': {
    gridTemplateRows: 'repeat(3, 100px)',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));
