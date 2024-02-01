import React, { useEffect, useState } from 'react';
import { Button, List, styled as MuiStyled, Palette } from '@mui/material';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StackList from './StackList';
import { allStack, skillsList } from '../../../constant/info';
import { motion } from 'framer-motion';
import { AllStackType, SelectStackType } from '../../../type/sections';

export default function Skills() {
  const [category, setCategory] = useState('프론트엔드');
  const [stack, setStack] = useState('react');
  const [stackInfo, setStackInfo] = useState<SelectStackType>();
  const categoryList = ['프론트엔드', '백엔드', '툴'];

  const listProps = { category, stackInfo, stack, setStack };

  useEffect(() => {
    const stack = Object.keys(allStack[category]);
    setStack(stack[0]);
  }, [category]);

  useEffect(() => {
    const detailStack = allStack[category][stack];
    setStackInfo(detailStack);
  }, [stack]);

  if (!stackInfo) return <div></div>;

  return (
    <Container id="skills">
      <Title>
        <p>🗂️</p>
        <h3>기술 목록</h3>
      </Title>
      <SubTitleContatiner>
        {categoryList.map(key => (
          <SubTitle key={key} $select={category === key} onClick={() => setCategory(key)}>
            {key}
          </SubTitle>
        ))}
      </SubTitleContatiner>
      {categoryList.map(key => category === key && <StackList key={key} {...listProps} />)}
    </Container>
  );
}

const Container = MuiStyled('section')({
  width: '100%',
  marginTop: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
});

const Title = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  marginBottom: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
  fontSize: 32,

  p: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700,
  },
}));

const SubTitleContatiner = MuiStyled(motion.div)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gap: 20,
  fontSize: 32,
  gridTemplateColumns: 'repeat(3, 1fr)',
}));

const SubTitle = MuiStyled('p')<{ $select: boolean }>(({ $select, theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: `${$select ? theme.palette.secondary.main : 'white'}`,
  cursor: 'pointer',
  position: 'relative',
}));
