import { styled as MuiStyled } from '@mui/material';
import Turtle from './Turtle';
import WaveTxt from './WaveTxt';
import Ocean from './Ocean';

export default function Main() {
  return (
    <Containter id="Home">
      <Bg></Bg>
      <WaveTxt />
      <Turtle />
    </Containter>
  );
}

const Containter = MuiStyled('main')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Bg = MuiStyled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '70%',
  zIndex: -1,
  opacity: 0.7,
  transition: 'background-image 2s',
  backgroundImage: 'linear-gradient(to bottom,#ffffff 0%,#ffecd2 20%, #fcb69f 100%)',

  ...(theme.palette.mode === 'dark' && {
    backgroundImage: 'linear-gradient(to bottom,#ffffff 0%, #0c6060 20%, #330867 100%)',
  }),
}));
