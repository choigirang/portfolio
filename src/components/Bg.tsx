import { styled, useTheme } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';
import { sunAni, weather } from '../styles/keyframe';

export default function Bg() {
  const theme = useTheme().palette.mode;

  return (
    <Container>
      <WeatherIcon>{theme === 'dark' ? <CircleIcon className="moon" /> : <WbSunnyIcon className="sun" />}</WeatherIcon>
      <GradientBg />
    </Container>
  );
}

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -999,
}));

const WeatherIcon = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 50,
  right: -30,
  transition: 'all 2s',

  '& .sun': {
    color: '#fcb69f',
    width: '300px',
    height: '300px',
    opacity: 0.5,
    filter: 'drop-shadow(0 0 30px #fcb69f)',
    animation: `${weather} 5s ease-in-out infinite, ${sunAni} 5s ease-in-out infinite`,
  },

  ...(theme.palette.mode === 'dark' && {
    position: 'absolute',
    top: 50,
    left: -30,

    '& .moon': {
      color: '#ffe358',
      width: '300px',
      height: '300px',
      opacity: 0.5,
      filter: 'drop-shadow(0 0 30px #ffe358)',
      animation: `${weather} 5s ease-in-out infinite, ${sunAni} 5s ease-in-out infinite`,
    },
  }),
}));

const GradientBg = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  opacity: 0.7,
  transition: 'all 2s',
  backgroundImage: 'linear-gradient(to bottom,#ffffff 0%,#ffecd2 40%, #fcb69f 100%)',

  ...(theme.palette.mode === 'dark' && {
    backgroundImage: 'none',
    opacity: 1,
    backgroundColor: theme.palette.primary.dark,
  }),
}));
