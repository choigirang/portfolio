import { Alert, Button, styled as MuiStyled, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useRef, useState } from 'react';
import Plane from './Plane';
import { ContactType } from '../../../type/sections';
import emailjs from '@emailjs/browser';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const contact: ContactType = {
  Name: 'text',
  Mail: 'email',
  Content: 'text',
};

export default function Contact() {
  const [alertMsg, setAlertMsg] = useState({
    value: false,
    success: false,
    msg: '',
  });

  const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_KEY;
  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return console.log('form null');

    if (!SERVICE_ID || !TEMPLATE_ID) return console.log('send mail func has wrong key', SERVICE_ID, TEMPLATE_ID);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      result => {
        setAlertMsg({ value: true, success: true, msg: 'Email sent successfully!' });
      },
      error => {
        setAlertMsg({ value: true, success: false, msg: 'Try again!' });
      },
    );
  };

  return (
    <Container id="contact">
      <Plane />
      <Board ref={form} onSubmit={sendEmail}>
        {(Object.keys(contact) as (keyof ContactType)[]).map(each => (
          <TextInput
            key={each}
            name={each}
            label={each}
            id={each}
            type={contact[each]}
            multiline
            rows={each === 'Content' ? 5 : undefined}
            required
          />
        ))}
        {alertMsg.value ? (
          <Alert
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'all 2s ease-in-out',
            }}
            severity={alertMsg.success ? 'success' : 'error'}
            variant="outlined"
            onClose={() => setAlertMsg(prev => ({ ...prev, value: false }))}
          />
        ) : (
          <Alert />
        )}
        <SubmitBtn startIcon={<SendIcon />} variant="contained" type="submit">
          SEND
        </SubmitBtn>
      </Board>
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100vw',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .5s ease-in-out',

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.primary.dark,
  }),
}));

const Board = MuiStyled('form')(({ theme }) => ({
  width: '40%',
  height: '60%',
  maxWidth: 600,
  maxHeight: 700,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '0 5%',
  paddingTop: '10%',
  borderRadius: 50,
  backgroundColor: theme.palette.secondary.main,
  boxShadow: 'inset 0 5px 5px -5px #333, inset 0 -5px 5px -5px #333',
  transition: 'all .5s ease-in-out',

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.common.white,
  }),
}));

const TextInput = MuiStyled(TextField)(({ theme }) => ({
  outline: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',

  '& label': {
    fontWeight: '500',

    '&.Mui-focused': {
      color: 'black',
    },
  },

  '& textarea': {
    color: 'black',
    outline: 'none',
    border: 'none',
  },

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#a1d6ff',

    '& .MuiOutlinedInput-root': {
      '& .Mui-focused': {
        borderColor: '#a1d6ff',
      },
    },

    '& label': {
      '&.Mui-focused': {
        color: 'black',
      },
    },
  }),
}));

const SubmitBtn = MuiStyled(Button)(({ theme }) => ({
  color: '#fff',
  '&:hover': {
    backgroundColor: '#b2933c',
    color: 'white',
  },

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#2aa3ff',
    '&:hover': {
      backgroundColor: '#2278ba',
      color: 'white',
    },
  }),
}));