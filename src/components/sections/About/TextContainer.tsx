import { styled as MuiStyled } from '@mui/material';
import React from 'react';

export default function TextContainer() {
  return (
    <Container>
      <span>
        <span className="h1">사용자 경험</span>을 중시하는 프론트엔드 개발자입니다.
      </span>
      <span>
        <span className="h1">개발의 역량</span>과 <span className="h1">디자인</span>을 결합하여, 사용자 경험을
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

  '.h1': {
    fontSize: 34,
    color: theme.palette.secondary.main,
  },
}));
