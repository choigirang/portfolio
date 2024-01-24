import { styled as MuiStyled, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { turtleFrontFoot, turtleBackFoot, sleep } from '../../../styles/keyframe';
import { TurtleAnimationProps } from '../../../type/common';

export default function Turtle() {
  const [turtleX, setTurtleX] = useState(0);
  const currentPath = window.location.pathname;
  const theme = useTheme().palette.mode;

  const moveTurtle = () => {
    if (theme === 'dark') return;
    if (turtleX <= window.innerWidth) {
      setTurtleX(prev => prev + 10);
    } else {
      setTurtleX(0);
    }
  };

  useEffect(() => {
    if (theme !== 'dark') {
      const intervalX = setTimeout(() => {
        moveTurtle();
      }, 5000);

      return () => clearInterval(intervalX);
    }
  }, [turtleX, theme]);

  useEffect(() => {
    if (currentPath !== '/Home') {
      return setTurtleX(0);
    }
  }, [currentPath]);

  return (
    <Container $turtleX={turtleX}>
      <TurtleHead>
        <div className="eye" />
        <div className="mouse" />
        {theme === 'dark' && <div className="sleep" />}
      </TurtleHead>
      <TurtleBody>
        <div className="plate" />
        <TurtleFoot $resetPath={currentPath}>
          <div className="front-front foot" />
          <div className="front-back foot" />
          <div className="back-front foot" />
          <div className="back-back foot" />
        </TurtleFoot>
        <div className="tail" />
      </TurtleBody>
    </Container>
  );
}

const Container = MuiStyled('div')<TurtleAnimationProps>(({ $turtleX }) => ({
  position: 'absolute',
  bottom: 30,
  left: `calc(20% + ${$turtleX}px)`,
  opacity: 0.5,
  transition: 'all 1s ease-in-out',
}));

const TurtleHead = MuiStyled('div')(({ theme }) => ({
  width: 150,
  height: 100,
  border: 'solid 9px black',
  borderRadius: '85px 85px 50px 37px / 75px 75px 25px 34px;',
  backgroundColor: '#9ACD31',
  position: 'absolute',
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'end',
  flexDirection: 'column',
  zIndex: -1,

  '.eye': {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 40,
    right: 20,
  },

  ...(theme.palette.mode === 'dark' && {
    '.eye': {
      width: 25,
      height: 8,
      borderRadius: 20,
      backgroundColor: 'black',
      position: 'absolute',
      top: 40,
      right: 20,
    },

    '.sleep': {
      width: '64px',
      height: '64px',
      position: 'absolute',
      bottom: '-5px',
      left: '150px',
      backgroundColor: '#cbffff',
      border: 'solid 5px #93ffff',
      borderRadius: '100% 100% 0% 100%',
      transform: 'rotate(135deg)',
      animation: `${sleep} 4s infinite`,
      opacity: '1 !important',
    },
  }),

  '.mouse': {
    width: 40,
    height: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 60,
    right: -5,
    borderRadius: 50,
  },
}));

const TurtleBody = MuiStyled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
  right: 90,
  width: 250,
  height: 150,
  border: 'solid 9px black',
  backgroundColor: '#2E4F4F',
  borderRadius: '220px 220px 50px 37px / 300px 300px 25px 34px',

  // 상판
  '.plate': {
    position: 'absolute',
    bottom: -15,
    width: 270,
    height: 30,
    border: 'solid 9px black',
    backgroundColor: 'white',
    borderRadius: 20,
  },
}));

const TurtleFoot = MuiStyled('div')<TurtleAnimationProps>(({ $resetPath, theme }) => ({
  '.foot': {
    position: 'absolute',
    bottom: -30,
    width: 80,
    height: 60,
    backgroundColor: '#9ACD31',
    border: 'solid 9px black',
    borderRadius: '45px 45px 50px 50px / 60px 60px 0px 0px',
  },

  // 앞발
  '.front-front': {
    position: 'absolute',
    right: -10,

    ...(theme.palette.mode !== 'dark' && {
      animation: `${$resetPath === '/Home' && `${turtleFrontFoot} 5s 1s infinite`}`,
    }),
  },

  '.back-front': {
    position: 'absolute',
    right: 10,
    bottom: -25,
    zIndex: -1,

    ...(theme.palette.mode !== 'dark' && {
      animation: `${$resetPath === '/Home' && `${turtleFrontFoot} 5s 1s infinite`}`,
    }),
  },

  // 뒷발
  '.front-back': {
    position: 'absolute',
    left: 30,

    ...(theme.palette.mode !== 'dark' && {
      animation: `${$resetPath === '/Home' && `${turtleBackFoot} 5s 1s infinite`}`,
    }),
  },
  '.back-back': {
    position: 'absolute',
    left: 10,
    bottom: -25,
    zIndex: -1,

    ...(theme.palette.mode !== 'dark' && {
      animation: `${$resetPath === '/Home' && `${turtleBackFoot} 5s 1s infinite`}`,
    }),
  },

  // 꼬리
  '.tail': {
    position: 'absolute',
    bottom: 0,
    left: -40,
    width: 50,
    height: 30,
    border: 'solid 9px black',
    borderRadius: '30px 0 0 30px / 20px 0 0 20px',
    backgroundColor: '#9ACD31',
    zIndex: -1,
  },
}));
