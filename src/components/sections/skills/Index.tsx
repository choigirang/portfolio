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
  const [category, setCategory] = useState('언어');
  const [stack, setStack] = useState('');
  const [stackInfo, setStackInfo] = useState<SelectStackType>();
  const categoryList = ['언어', '프론트엔드', '백엔드', '툴'];

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
        <h4>클릭 시 관련 게시글을 자세히 볼 수 있습니다.</h4>
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

  h4: {
    fontSize: 20,
    color: '#6a6a6a',
  },

  '@media (max-width: 768px)': {
    h3: {
      fontSize: 24,
    },
  },
}));

const SubTitleContatiner = MuiStyled(motion.div)(({ theme }) => ({
  width: '100%',
  marginBottom: 50,
  display: 'grid',
  gap: 20,
  fontSize: 32,
  gridTemplateColumns: 'repeat(4, 1fr)',

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 24,
    marginBottom: 30,
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    fontSize: 20,
    marginBottom: 0,
  },
}));

const SubTitle = MuiStyled('p')<{ $select: boolean }>(({ $select, theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: `${$select ? theme.palette.primary.main : 'white'}`,
  cursor: 'pointer',
  position: 'relative',
}));
