import { styled as MuiStyled } from '@mui/material';
import Card from './Card';
import { skillCardInfo } from '../../../constant/info';
import LinkProjectCard from './LinkProject';

export default function Main() {
  return (
    <Containter id="home">
      <LinkProjectCard />
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
  paddingTop: 100,
  boxSizing: 'border-box',
  gridTemplateColumns: '2fr 1fr 1fr',

  /* 타블렛 */
  '@media (min-width: 768px) and (max-width: 1023px)': {
    gridTemplateRows: 'repeat(1, 300px)',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  /* 모바일 */
  '@media (max-width: 768px)': {
    gridTemplateRows: 'repeat(3, 100px)',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
