import { styled as MuiStyled } from '@mui/material';
import ProjectCard from './ProjectCard';
import Card from './Card';
import { SkillCardProps } from '../../../type/skillsType';

const skillCardInfo: { [key: string]: SkillCardProps } = {
  first: {
    src: 'skills',
    txt: '기술 스택',
    bedge: 'skills',
    color: 'purple',
  },
  second: {
    src: 'contact',
    txt: '연락처',
    bedge: 'contact',
    color: 'green',
  },
};

export default function Main() {
  return (
    <Containter id="home">
      <ProjectCard />
      {Object.keys(skillCardInfo).map(key => (
        <Card key={key} {...skillCardInfo[key]}></Card>
      ))}
    </Containter>
  );
}

const Containter = MuiStyled('main')({
  width: '100%',
  display: 'grid',
  gap: 20,
  padding: '100px 5% 0 5%',
  boxSizing: 'border-box',

  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'minmax(400px, 900px) minmax(300px, 1fr) minmax(300px, 1fr)',
  },

  '@media (max-width: 1200px)': {
    gridTemplateRows: 'repeat(2, 300px)',
    gridTemplateColumns: 'repeat(2, 1fr)',

    '& > div:nth-of-type(1)': {
      gridColumn: 'span 2',
    },
  },

  '@media (max-width: 768px)': {
    gridTemplateRows: 'repeat(2, 300px)',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
