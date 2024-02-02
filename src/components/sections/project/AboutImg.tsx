import React, { useEffect, useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import useGetImg from '../../../hooks/useGetImg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function AboutImg({ name }: { name: string }) {
  const [showImg, setShowImg] = useState(0);
  const [saveImgUrl, setSaveImgUrl] = useState<string[]>([]);
  const { data: imgUrl, isLoading, error } = useGetImg(name);
  const [intervalId, setIntervalId] = useState<boolean>(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  useEffect(() => {
    if (!imgUrl) return;
    setSaveImgUrl(imgUrl);
  }, [imgUrl]);

  // const count = setInterval(() => {
  //   setShowImg(prevShowImg => prevShowImg + 1);
  // }, 3000);

  // useEffect(() => {
  //   return () => {
  //     if (intervalId) {
  //       clearInterval(count);
  //     }
  //   };
  // }, [saveImgUrl, intervalId]);

  // const handleInterval = () => {
  //   if (intervalId !== null) {
  //     clearInterval(count);
  //     setIntervalId(prev => !prev);
  //   }
  // };

  const imgNumController = (dir: string) => {
    if (dir === 'next') {
      setShowImg(prev => (prev === saveImgUrl.length - 1 ? 0 : prev + 1));
    }
    if (dir === 'prev') {
      setShowImg(prev => (prev === 0 ? saveImgUrl.length - 1 : prev - 1));
    }
  };

  return (
    <ShowImg>
      <ImgBox onMouseEnter={() => setHoverBtn(true)} onMouseLeave={() => setHoverBtn(false)}>
        <MoveImgLeftBtn hoverBtn={hoverBtn} startIcon={<ArrowLeftIcon />} onClick={() => imgNumController('prev')} />
        <Img src={saveImgUrl[showImg]} alt={`${name + showImg} img`}></Img>
        <MoveImgRightBtn hoverBtn={hoverBtn} startIcon={<ArrowRightIcon />} onClick={() => imgNumController('next')} />
        <CheckImgLength>
          {showImg + 1}/{saveImgUrl.length}
        </CheckImgLength>
      </ImgBox>
    </ShowImg>
  );
}

const ShowImg = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  maxHeight: 300,
  position: 'relative',
}));

const ImgBox = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
}));

const MoveImgLeftBtn = MuiStyled(Button)<{ hoverBtn: boolean }>(({ hoverBtn, theme }) => ({
  width: 50,
  height: 50,
  minWidth: 50,
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  borderRadius: '50%',
  opacity: hoverBtn ? 1 : 0,
  transition: 'all .3s',

  svg: {
    width: '100%',
    height: '100%',
  },
}));

const MoveImgRightBtn = MuiStyled(MoveImgLeftBtn)<{ hoverBtn: boolean }>(({ theme }) => ({
  position: 'absolute',
  right: '0 !important',
}));

const Img = MuiStyled('img')(({ theme }) => ({
  width: '100%',
  maxHeight: 300,
  objectFit: 'contain',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CheckImgLength = MuiStyled('span')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: 0,
  transform: 'translateX(-50%)',
  color: 'white',
  fontWeight: 500,
  textShadow: '1px 1px 5px black',
}));
