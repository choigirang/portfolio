import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useGetImg from '../../../hooks/useGetImg';
import { Button, styled as MuiStyled } from '@mui/material';
import AboutImg from './AboutImg';
import { projects } from '../../../constant/info';
import { ProjectDetailType } from '../../../type/sections';
import AboutContent from './AboutContent';
import { SetStatOption } from 'aws-sdk/clients/transfer';
import DescriptionContent from './DescriptionContent';

export default function ProjectCard({ name }: { name: string }) {
  const [flipCard, setFlipCard] = useState(false);
  const [projectData, setProjectData] = useState<ProjectDetailType>();

  useEffect(() => {
    if (!name) return;
    setProjectData(projects[name]);
  }, [name]);

  const handleFlipCard = () => {
    setFlipCard(prev => !prev);
  };

  return (
    <Container flipCard={flipCard} onClick={handleFlipCard}>
      <Card>
        {projectData && (
          <React.Fragment>
            <FrontContent flipCard={flipCard}>
              <AboutImg name={projectData.name} />
              <AboutContent {...projectData} />
            </FrontContent>
            <DescriptionContent flipCard={flipCard} description={projectData?.description} />
          </React.Fragment>
        )}
      </Card>
    </Container>
  );
}

const Container = MuiStyled('section')<{ flipCard: boolean }>(({ flipCard, theme }) => ({
  width: '100%',
  backgroundColor: '#1A1B24',
  borderRadius: 10,
  transition: 'all 1s',

  ...(flipCard && {
    transition: 'all 1s',
    transform: 'rotateY(180deg)',
  }),
}));

const Card = MuiStyled('div')(({ theme }) => ({
  width: '100%',
}));

const FrontContent = MuiStyled('div')<{ flipCard: boolean }>(({ flipCard, theme }) => ({
  width: '100%',
  height: '100%',
  padding: '5%',
  display: 'flex',
  flexDirection: 'column',
  gap: 70,
  backfaceVisibility: 'hidden',
  transition: 'all .3s',
  transform: flipCard ? 'rotateY(180deg)' : 'rotateY(0)',

  ...(flipCard && {
    visibility: 'hidden',
    transition: 'all .3s',
  }),
}));
