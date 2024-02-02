import { Alert, Button, styled as MuiStyled, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Board from './Board';

export default function Contact() {
  return (
    <Container id="contact">
      <Title>
        <p>📩</p>
        <p>연락처</p>
      </Title>
      <Board />
    </Container>
  );
}

const Container = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  paddingBottom: '20%',
  position: 'relative',
  marginTop: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .5s ease-in-out',

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.primary.dark,
  }),
}));

const Title = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  marginBottom: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
  fontSize: 32,

  p: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700,
  },
}));
