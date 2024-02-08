import { Alert, Button, styled as MuiStyled, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Board from './Board';

export default function Contact() {
  return (
    <Container id="contact">
      <Title>
        <p>📩</p>
        <h3>연락처</h3>
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {},

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    fontSize: 24,
  },
}));
