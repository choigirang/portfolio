import React, { useState } from 'react';
import { Button, List, styled as MuiStyled, Palette } from '@mui/material';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StackList from './StackList';
import { skillsList } from '../../../constant/info';

export default function Skills() {
  const [slideX, setSlideX] = useState(0);
  const [selectStack, setSelectStack] = useState('frontend');

  const slideHandler = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      if (slideX === 0) return setSlideX(-300), setSelectStack('tools');
      const findValueIdx = Object.values(skillsList).indexOf(selectStack);
      const findKeyNewIdx = Object.keys(skillsList)[findValueIdx - 1];
      setSlideX(prev => prev + 150);
      setSelectStack(skillsList[findKeyNewIdx]);
    } else {
      if (slideX === -300) return setSlideX(0), setSelectStack('frontend');
      const findValueIdx = Object.values(skillsList).indexOf(selectStack);
      const findKeyNewIdx = Object.keys(skillsList)[findValueIdx + 1];
      setSlideX(prev => prev - 150);
      setSelectStack(skillsList[findKeyNewIdx]);
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
            {Object.values(skillsList).map(each => (
              <Button key={each}>
                <TextSelect>{each}</TextSelect>
              </Button>
            ))}
          </TxtBox>
        </ShowBox>
        <SlideBtn
          onClick={() => slideHandler('right')}
          startIcon={<ArrowRightIcon style={{ fontSize: 50 }} />}></SlideBtn>
      </ContainSlideBtn>
      <StackList stack={selectStack} />
    </Container>
  );
}

const Container = MuiStyled('div')({
  width: '100%',
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
  alignItems: 'center',
}));

const SlideBtn = styled(Button)(({ theme }) => ({
  borderRadius: '50%',
  width: 50,
  height: 50,
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 30,
  color: 'black',
  textShadow: '#FC0 1px 0 10px',
}));
