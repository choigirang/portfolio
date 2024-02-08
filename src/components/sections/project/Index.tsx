import ProjectCard from './ProjectCard';

import { projects } from '../../../constant/info';

import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @returns 프로젝트 메인 페이지
 */
export default function Project() {
  return (
    <Container id="project">
      <Title>
        <p>🖥️</p>
        <h3>프로젝트</h3>
        <h4>카드를 클릭하여 상세 설명을 볼 수 있습니다.</h4>
      </Title>
      <ProjectContainer>
        {Object.keys(projects).map((project, idx) => (
          <ProjectCard name={project} key={project} />
        ))}
      </ProjectContainer>
    </Container>
  );
}

const Container = MuiStyled('section')({
  width: '100%',
  marginTop: 50,
});

const Title = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  marginBottom: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
  fontSize: 32,

  p: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700,
  },

  h4: {
    fontSize: 20,
    color: '#6a6a6a',
  },

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    p: {
      fontWeight: 500,
    },
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    p: {
      fontWeight: 300,
    },

    h3: {
      fontSize: 24,
    },
  },
}));

const ProjectContainer = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 30,

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {},

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    gridTemplateColumns: '1fr',
  },
}));
