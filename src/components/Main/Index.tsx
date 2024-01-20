import { styled as MuiStyled } from '@mui/material';

export default function Index() {
  return (
    <Containter id="Home">
      <Profile></Profile>
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

const Profile = MuiStyled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 400,
  height: 500,
  backgroundColor: 'black',
});
