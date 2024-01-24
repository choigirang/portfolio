import { styled as MuiStyled } from '@mui/material';
import Turtle from './Turtle';

export default function Main() {
  return (
    <Containter id="Home">
      <Turtle></Turtle>
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
