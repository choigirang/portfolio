import React from 'react';
import ProjectCard from './ProjectCard';
import { styled as MuiStyled } from '@mui/material';
import { projects } from '../../../constant/info';

export default function Project() {
  return (
    <Container id="project">
      <Title>
        <p>🖥️</p>
        <h3>프로젝트</h3>
        <h4>카드를 클릭하여 추가 설명을 볼 수 있습니다.</h4>
      </Title>
      <ProjectContainer>
        {Object.keys(projects).map(project => (
          <ProjectCard name={project} key={project}></ProjectCard>
        ))}
      </ProjectContainer>
    </Container>
  );
}

const Container = MuiStyled('div')({
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
}));

const ProjectContainer = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 30,
}));
