import { styled as MuiStyled } from '@mui/material';
import React from 'react';

export default function TextContainer() {
  return (
    <Container>
      <span>
        <span className="accent">사용자 경험</span>을 중시하는 프론트엔드 개발자입니다.
      </span>
      <span>
        <span className="accent">개발의 역량</span>과 <span className="accent">디자인</span>을 결합하여, 사용자 경험을
      </span>
      <span>높일 수 있는 개발자를 목표로 하고 있습니다.</span>
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  marginTop: 20,
  textAlign: 'center',
  color: 'white',
  fontSize: 32,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 10,

  '.accent': {
    fontSize: 34,
    color: theme.palette.secondary.main,
  },

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 24,

    '.accent': {
      fontSize: 24,
    },
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    fontSize: 20,

    '.accent': {
      fontSize: 20,
    },
  },
}));
