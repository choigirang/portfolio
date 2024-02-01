import React, { useEffect, useState } from 'react';
import useGetImg from '../../../hooks/useGetImg';
import { Button, styled as MuiStyled } from '@mui/material';
import AboutImg from './AboutImg';
import { projects } from '../../../constant/info';
import { ProjectDetailType } from '../../../type/sections';
import AboutContent from './AboutContent';

export default function ProjectCard({ name }: { name: string }) {
  const [projectData, setProjectData] = useState<ProjectDetailType>();

  useEffect(() => {
    if (!name) return;
    setProjectData(projects[name]);
  }, []);

  return (
    <Container>
      <Card>
        {projectData && (
          <React.Fragment>
            <AboutImg name={projectData.title} />
            <AboutContent {...projectData}></AboutContent>
          </React.Fragment>
        )}
      </Card>
    </Container>
  );
}

const Container = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#1A1B24',
  borderRadius: 10,
}));

const Card = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  padding: '5%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}));
