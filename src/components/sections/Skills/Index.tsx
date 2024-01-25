import React, { useState } from 'react';
import { Button, List, styled as MuiStyled, Palette } from '@mui/material';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const list = ['Frontend', 'Backend', 'Tool'];

export default function Skills() {
  const [slideX, setSlideX] = useState(0);
  const [selectStack, setSelectStack] = useState('Frontend');

  const slideHandler = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      if (slideX === 0) return setSlideX(-300);
      setSlideX(prev => prev + 150);
    } else {
      if (slideX === -300) return setSlideX(0);
      setSlideX(prev => prev - 150);
    }
  };

  return (
    <Container id="Skills">
      <ContainSlideBtn>
        <SlideBtn onClick={() => slideHandler('left')} startIcon={<ArrowLeftIcon />}></SlideBtn>
        <ShowBox>
          <TxtBox slideX={slideX}>
            {list.map(each => (
              <Button>
                <TextSelect>{each}</TextSelect>
              </Button>
            ))}
          </TxtBox>
        </ShowBox>
        <SlideBtn onClick={() => slideHandler('right')} startIcon={<ArrowRightIcon />}></SlideBtn>
      </ContainSlideBtn>
    </Container>
  );
}

const Container = MuiStyled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 calc((100vw - 1280px) / 2)',
});

const ContainSlideBtn = styled('div')(({ theme }) => ({
  width: 300,
  display: 'flex',
  justifyContent: 'space-between',
}));

const SlideBtn = styled(Button)(({ theme }) => ({
  svg: {
    fontSize: 50,
  },
}));

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
