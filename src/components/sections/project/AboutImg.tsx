import React, { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import useGetImg from '../../../hooks/useGetImg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';

export default function AboutImg({ name }: { name: string }) {
  const [showImg, setShowImg] = useState(0);
  const [saveImgUrl, setSaveImgUrl] = useState<string[]>([]);
  const { data: imgUrl, isLoading, error } = useGetImg(name);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [startIcon, setStartIcon] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!imgUrl) return;
    setSaveImgUrl(imgUrl);

    intervalRef.current = setInterval(() => {
      setShowImg(prev => (prev === saveImgUrl.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [imgUrl, saveImgUrl]);

  const imgNumController = (e: React.MouseEvent<HTMLButtonElement>, dir: string) => {
    e.stopPropagation();
    if (dir === 'next') {
      setShowImg(prev => (prev === saveImgUrl.length - 1 ? 0 : prev + 1));
    }
    if (dir === 'prev') {
      setShowImg(prev => (prev === 0 ? saveImgUrl.length - 1 : prev - 1));
    }
    if (dir === 'start') {
      setStartIcon(prev => !prev);

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else {
        intervalRef.current = setInterval(() => {
          setShowImg(prev => (prev === saveImgUrl.length - 1 ? 0 : prev + 1));
        }, 3000);
      }
    }
  };

  return (
    <ShowImg>
      <ImgBox onMouseEnter={() => setHoverBtn(true)} onMouseLeave={() => setHoverBtn(false)}>
        <MoveImgLeftBtn hoverBtn={hoverBtn} startIcon={<ArrowLeftIcon />} onClick={e => imgNumController(e, 'prev')} />
        <Img hoverBtn={hoverBtn} src={saveImgUrl[showImg]} alt={`${name + showImg} img`} />
        <MoveImgRightBtn
          hoverBtn={hoverBtn}
          startIcon={<ArrowRightIcon />}
          onClick={e => imgNumController(e, 'next')}
        />
        <CheckImgLength>
          {showImg + 1}/{saveImgUrl.length}
        </CheckImgLength>
        <StartPauseBtn
          hoverBtn={hoverBtn}
          onClick={e => imgNumController(e, 'start')}
          startIcon={startIcon ? <PlayCircleFilledWhiteIcon /> : <StopCircleIcon />}
        />
      </ImgBox>
    </ShowImg>
  );
}

const ShowImg = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  height: 300,
  position: 'relative',

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    height: 200,
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    height: 150,
  },
}));

const ImgBox = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const MoveImgLeftBtn = MuiStyled(Button)<{ hoverBtn: boolean }>(({ hoverBtn, theme }) => ({
  width: 50,
  height: 50,
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  borderRadius: '50%',
  opacity: hoverBtn ? 1 : 0,
  transition: 'all .3s',

  span: {
    margin: 0,
  },

  svg: {
    width: '100%',
    height: '100%',
    color: theme.palette.secondary.main,
  },

  '&:hover': {
    svg: {
      color: theme.palette.primary.main,
    },
  },
}));

const MoveImgRightBtn = MuiStyled(Button)<{ hoverBtn: boolean }>(({ hoverBtn, theme }) => ({
  width: 50,
  height: 50,
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  borderRadius: '50%',
  opacity: hoverBtn ? 1 : 0,
  transition: 'all .3s',

  span: {
    margin: 0,
  },

  svg: {
    width: '100%',
    height: '100%',
    color: theme.palette.secondary.main,
  },

  '&:hover': {
    svg: {
      color: theme.palette.primary.main,
    },
  },
}));

const StartPauseBtn = MuiStyled(Button)<{ hoverBtn: boolean }>(({ hoverBtn, theme }) => ({
  width: 70,
  height: 70,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  borderRadius: '50%',
  opacity: hoverBtn ? 1 : 0,
  transition: 'all .3s',

  span: {
    margin: 0,
  },

  svg: {
    width: '100%',
    height: '100%',
    color: theme.palette.secondary.main,
  },

  '&:hover': {
    svg: {
      color: theme.palette.primary.main,
    },
  },
}));

const Img = MuiStyled('img')<{ hoverBtn: boolean }>(({ hoverBtn, theme }) => ({
  maxWidth: '100%',
  height: '100%',
  maxHeight: 300,
  objectFit: 'contain',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: hoverBtn ? 0.7 : 1,
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
