import { useEffect, useState } from 'react';
import AboutImg from './AboutImg';
import AboutContent from './AboutContent';
import DescriptionContent from './DescriptionContent';

import { projects } from '../../../constant/info';
import { ProjectDetailType } from '../../../type/sections';

import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @param name 메인 페이지에서 매핑으로 뿌려질 프로젝트명
 * @returns 컴포넌트 앞면과 뒷면 카드
 */
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
      {projectData && (
        <Card>
          {/* 앞면 */}
          <FrontContent flipCard={flipCard}>
            <AboutImg name={projectData.name} />
            <AboutContent {...projectData} />
          </FrontContent>
          {/* 뒷면 */}
          <DescriptionContent flipCard={flipCard} description={projectData?.description} />
        </Card>
      )}
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    gap: 50,
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    gap: 20,
  },
}));
