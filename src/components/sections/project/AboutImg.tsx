import React, { useEffect, useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import useGetImg from '../../../hooks/useGetImg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function AboutImg({ name }: { name: string }) {
  const [showImg, setShowImg] = useState(0);
  const [saveImgUrl, setSaveImgUrl] = useState<string[]>([]);
  const { data: imgUrl, isLoading, error } = useGetImg(name);

  useEffect(() => {
    if (!imgUrl) return;
    setSaveImgUrl(imgUrl);
  }, [imgUrl]);

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
      <MoveImgBtn startIcon={<ArrowLeftIcon />} onClick={() => imgNumController('prev')} />
      <Img src={saveImgUrl[showImg]} alt={`${name + showImg} img`}></Img>
      <MoveImgBtn startIcon={<ArrowRightIcon />} onClick={() => imgNumController('next')} />
      <CheckImgLength>
        {showImg + 1}/{saveImgUrl.length}
      </CheckImgLength>
    </ShowImg>
  );
}

const ShowImg = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  height: 250,
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '32px auto 32px',
  position: 'relative',
}));

const MoveImgBtn = MuiStyled(Button)(({ theme }) => ({
  width: 32,
  height: 32,
  minWidth: 32,
  color: 'white',
  padding: 0,
  borderRadius: '50%',

  '& :hover': {
    backgroundColor: 'white',
    transition: 'all .3s',
  },
}));

const Img = MuiStyled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
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
