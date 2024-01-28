import React from 'react';
import { styled as MuiStyled } from 'styled-components';

export default function About() {
  return (
    <Container id="about">
      <Title>
        <p>🧑🏻‍💻</p>
        <p>소개</p>
      </Title>
    </Container>
  );
}

const Container = MuiStyled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Title = MuiStyled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: 32,

  p: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700,
  },
});
