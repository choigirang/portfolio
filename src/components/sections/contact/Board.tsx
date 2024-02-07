import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ContactType } from '../../../type/sections';

import { Alert, Button, styled as MuiStyled, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const contact: ContactType = {
  이름: 'text',
  메일주소: 'email',
  내용: 'text',
};

/**
 *
 * @returns 연락처 판
 */
export default function Board() {
  const [alertMsg, setAlertMsg] = useState({
    value: false,
    success: false,
    msg: '',
  });

  const form = useRef<HTMLFormElement | null>(null);

  const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_KEY;
  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;

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
    <Container ref={form} onSubmit={sendEmail}>
      {Object.keys(contact).map(each => (
        <TextInput
          key={each}
          name={each}
          label={each}
          id={each}
          type={contact[each]}
          multiline
          variant="filled"
          rows={each === '내용' ? 5 : undefined}
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
        <SubmitBtn startIcon={<SendIcon />} variant="contained" type="submit">
          보내기
        </SubmitBtn>
      )}
    </Container>
  );
}

const Container = MuiStyled('form')(({ theme }) => ({
  width: '100%',
  maxHeight: 700,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '5%',
  borderRadius: 10,
  backgroundColor: '#1A1B24',
  boxShadow: 'inset 0 5px 5px -5px #333, inset 0 -5px 5px -5px #333',
  transition: 'all .5s ease-in-out',

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.common.white,
  }),
}));

const TextInput = MuiStyled(TextField)(({ theme }) => ({
  outline: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  backgroundColor: 'white',
  borderRadius: 10,

  textarea: {
    color: theme.palette.primary.main,
  },

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
    backgroundColor: '#1A1B24',
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
