import { styled as MuiStyled } from '@mui/material';
import React from 'react';

export default function Contact() {
  return <Container id="Contact">Contact</Container>;
}

const Container = MuiStyled('div')({
  width: '100vw',
  height: '100vh',
});
