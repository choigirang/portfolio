import React, { useState } from 'react';
import { Button, List, styled as MuiStyled, Palette } from '@mui/material';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StackList from './StackList';

const list: { [key: number]: string } = {
  1: 'Frontend',
  2: 'Backend',
  3: 'Tools',
};

export default function Skills() {
  const [slideX, setSlideX] = useState(0);
  const [selectStack, setSelectStack] = useState({
    num: 1,
    stack: list[1],
  });

  const slideHandler = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      if (slideX === 0) return setSlideX(-300), setSelectStack({ num: 3, stack: list[3] });
      setSlideX(prev => prev + 150);
      setSelectStack(prev => {
        const newNum = prev.num - 1;
        return { num: newNum, stack: list[newNum] };
      });
    } else {
      if (slideX === -300) return setSlideX(0), setSelectStack({ num: 1, stack: list[1] });
      setSlideX(prev => prev - 150);
      setSelectStack(prev => {
        const newNum = prev.num + 1;
        return { num: newNum, stack: list[newNum] };
      });
    }
  };

  return (
    <Container id="skills">
      <ContainSlideBtn>
        <SlideBtn
          onClick={() => slideHandler('left')}
          startIcon={<ArrowLeftIcon style={{ fontSize: 50 }} />}></SlideBtn>
        <ShowBox>
          <TxtBox slideX={slideX}>
            {Object.values(list).map(each => (
              <Button>
                <TextSelect key={each}>{each}</TextSelect>
              </Button>
            ))}
          </TxtBox>
        </ShowBox>
        <SlideBtn
          onClick={() => slideHandler('right')}
          startIcon={<ArrowRightIcon style={{ fontSize: 50 }} />}></SlideBtn>
      </ContainSlideBtn>
      <StackList stack={selectStack.stack} />
    </Container>
  );
}

const Container = MuiStyled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 calc((100vw - 1280px) / 2)',
});

const ContainSlideBtn = styled('div')(({ theme }) => ({
  width: 300,
  display: 'flex',
  justifyContent: 'space-between',
}));

const SlideBtn = styled(Button)(({ theme }) => ({}));

const ShowBox = MuiStyled('div')(({ theme }) => ({
  width: 150,
  height: 100,
  position: 'relative',
  overflow: 'hidden',
}));

const TxtBox = MuiStyled('div')<{ slideX: number }>(({ slideX, theme }) => ({
  width: 450,
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: slideX,
  transform: 'translateY(-50%)',
  transition: 'all .5s',
}));

const TextSelect = MuiStyled(List)(({ theme }) => ({
  width: 150,
  fontSize: 20,
}));
