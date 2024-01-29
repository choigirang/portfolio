import React, { useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import { allStack } from '../../../constant/info';

interface StackListProps {
  stack: string; // stack의 타입을 keyof AllStackType으로 지정
}

export default function StackList({ stack }: StackListProps) {
  const [showStack, setShowStack] = useState(stack);
  const selectedStack = allStack[stack];

  return (
    <Container>
      <IconBox>
        {Object.entries(selectedStack).map(([key, value]) => (
          <IconBtn key={key}>
            <img src={`https://cdn.simpleicons.org/${key}`} alt="icon" width="50" height="50" />
          </IconBtn>
        ))}
      </IconBox>
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  alignItems: 'center',
  justifyContent: 'center',
}));

const IconBox = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  justifyContent: 'center',
}));

const IconBtn = MuiStyled(Button)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: 'white',
  border: 'solid 3px #9c9c9c40',
}));
