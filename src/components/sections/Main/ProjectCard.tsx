import { styled as MuiStyled } from '@mui/material';
import React from 'react';
import useMoveScroll from '../../../hooks/useMoveScroll';

export default function ProjectCard() {
  const { scrollToPage } = useMoveScroll();

  return <Container onClick={() => scrollToPage('project')}>ProjectCard</Container>;
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  height: 400,
  borderRadius: 10,
  backgroundColor: '#1A1B24',
}));
