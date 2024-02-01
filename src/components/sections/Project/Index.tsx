import React from 'react';
import ProjectCard from './ProjectCard';
import { styled as MuiStyled } from '@mui/material';
import { projects } from '../../../constant/info';

export default function Project() {
  return (
    <Container id="project">
      <Title>
        <p>🖥️</p>
        <p>프로젝트</p>
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
});

const Title = MuiStyled('div')(({ theme }) => ({
  width: '100%',
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
}));

const ProjectContainer = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 10,
}));
