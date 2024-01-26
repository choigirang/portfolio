import { styled as MuiStyled } from '@mui/material';

export default function Main() {
  return <Containter id="home"></Containter>;
}

const Containter = MuiStyled('main')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
