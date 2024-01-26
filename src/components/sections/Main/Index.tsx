import { styled as MuiStyled } from '@mui/material';
import ProjectCard from './ProjectCard';
import SkillsCard from './SkillsCard';

export default function Main() {
  return (
    <Containter id="home">
      <ProjectCard />
      <SkillsCard />
      <SkillsCard />
    </Containter>
  );
}

const Containter = MuiStyled('main')({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'minmax(400px, 3fr) 1fr 1fr',
  gap: 20,
  padding: '100px 5% 0 5%',
  boxSizing: 'border-box',
});
