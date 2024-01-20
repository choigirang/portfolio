import React from 'react';
import { styled } from 'styled-components';

export default function About() {
  return <Container id="About">About</Container>;
}

const Container = styled('div')({
  width: '100%',
  height: '100vh',
  backgroundColor: 'lightyellow',
});