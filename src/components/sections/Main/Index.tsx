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
