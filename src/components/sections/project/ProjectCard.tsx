import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useGetImg from '../../../hooks/useGetImg';
import { Button, styled as MuiStyled } from '@mui/material';
import AboutImg from './AboutImg';
import { projects } from '../../../constant/info';
import { ProjectDetailType } from '../../../type/sections';
import AboutContent from './AboutContent';
import { SetStatOption } from 'aws-sdk/clients/transfer';
import DescriptionContent from './DescriptionContent';

export default function ProjectCard({
  name,
  cardNum,
  flipCard,
  setFlipCard,
}: {
  name: string;
  cardNum: number;
  flipCard: number | undefined;
  setFlipCard: Dispatch<SetStateAction<number | undefined>>;
}) {
  const [projectData, setProjectData] = useState<ProjectDetailType>();

  useEffect(() => {
    if (!name) return;
    setProjectData(projects[name]);
  }, [name]);

  const selectFilp = cardNum === flipCard;

  const handleFlipCard = (cardNum: number) => {
    if (cardNum === flipCard) setFlipCard(undefined);
    else setFlipCard(cardNum);
  };

  return (
    <Container flipCard={selectFilp} onClick={() => handleFlipCard(cardNum)}>
      <Card>
        {projectData && (
          <React.Fragment>
            <FrontContent selectFlip={selectFilp}>
              <AboutImg name={projectData.name} />
              <AboutContent {...projectData} />
            </FrontContent>
            <DescriptionContent selectFlip={selectFilp} description={projectData?.description} />
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
  transformStyle: 'preserve-3d',

  ...(flipCard && {
    transition: 'all 1s',
    transform: 'rotateY(180deg)',
  }),
}));

const Card = MuiStyled('div')(({ theme }) => ({
  width: '100%',
}));

const FrontContent = MuiStyled('div')<{ selectFlip: boolean }>(({ selectFlip, theme }) => ({
  width: '100%',
  height: '100%',
  padding: '5%',
  display: 'flex',
  flexDirection: 'column',
  gap: 70,
  backfaceVisibility: 'hidden',
  transition: 'all .3s',
  transform: selectFlip ? 'rotateY(180deg)' : 'rotateY(0)', // 뒤집히는 효과

  // selectFlip이 true일 때는 앞면이 보이지 않도록 처리
  ...(selectFlip && {
    visibility: 'hidden',
    transition: 'all .3s',
  }),
}));
