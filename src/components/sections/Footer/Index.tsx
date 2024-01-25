import { styled as MuiStyled, IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ListIcon from '@mui/icons-material/List';
import React, { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import { FaInstagram } from 'react-icons/fa';
import { MenuOpenType } from '../../../type/footerType';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import useMoveScroll from '../../../hooks/useMoveScroll';

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(false);

  const { scrollToTop, scrollToPage } = useMoveScroll();

  const openMenuHandler = () => {
    setOpenMenu(prev => !prev);
  };

  const openMyInfo = (url: string) => {
    if (url === 'insta') return window.open('https://www.instagram.com/choi_girang/', '_blank');
    if (url === 'github') return window.open('https://github.com/choigirang');
  };

  return (
    <Container>
      <UpIconBtn onClick={scrollToTop}>
        <UpIconStyling fontSize="large" />
      </UpIconBtn>
      <Menu>
        <ListIconBtn $openMenu={openMenu} onClick={openMenuHandler}>
          <ListIconStyle $openMenu={openMenu} fontSize="large" />
        </ListIconBtn>
        <DarkModeSwitch $openMenu={openMenu} />
        <InstaIconBtn size={30} $openMenu={openMenu} onClick={() => openMyInfo('insta')} />
        <GitIconBtn size={30} $openMenu={openMenu} onClick={() => openMyInfo('github')} />
        <MailIconBox $openMenu={openMenu} onClick={() => scrollToPage('Contact')}>
          <MailIconBtn size={30} $openMenu={openMenu}></MailIconBtn>
        </MailIconBox>
      </Menu>
    </Container>
  );
}

const Container = MuiStyled('footer')({
  position: 'fixed',
  display: 'flex',
  bottom: 0,
  justifyContent: 'end',
  alignItems: 'center',
  width: '100vw',
  height: '10%',
  padding: '0 calc((100vw - 1280px) / 2);',
  transition: 'all .5s ease !important',
});

const UpIconBtn = MuiStyled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}));

const UpIconStyling = MuiStyled(ArrowCircleUpIcon)(({ theme }) => ({
  color: '#828282f !important',
}));

const Menu = MuiStyled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  transition: 'all 2s',
});

const ListIconBtn = MuiStyled(IconButton)<MenuOpenType>(({ $openMenu, theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '50%',
  zIndex: 999,

  svg: {
    color: theme.palette.primary.main,
  },

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.secondary.dark,

    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),

  ...($openMenu && {
    backgroundColor: 'none',
  }),
}));

const ListIconStyle = MuiStyled(ListIcon)<MenuOpenType>(({ $openMenu, theme }) => ({
  color: 'white',

  ...($openMenu && {
    color: theme.palette.common.white,
  }),

  ...(theme.palette.mode === 'dark' &&
    $openMenu && {
      color: theme.palette.secondary.dark,
    }),

  '&:hover': {
    color: 'white',
  },
}));

const InstaIconBtn = MuiStyled(FaInstagram)<MenuOpenType>(({ $openMenu, theme }) => ({
  position: 'absolute',
  bottom: 130,
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'all .5s ease',
  zIndex: 100,
  color: theme.palette.common.white,

  '&:hover': {
    cursor: 'pointer',
  },

  ...(!$openMenu && {
    bottom: 0,
    opacity: 0,
  }),

  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.secondary.dark,
  }),
}));

const GitIconBtn = MuiStyled(FaGithub)<MenuOpenType>(({ $openMenu, theme }) => ({
  position: 'absolute',
  bottom: 180,
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'all .5s ease',
  zIndex: 100,
  color: theme.palette.common.white,

  '&:hover': {
    cursor: 'pointer',
  },

  ...(!$openMenu && {
    bottom: 0,
    opacity: 0,
  }),

  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.secondary.dark,
  }),
}));

const MailIconBox = MuiStyled('div')<MenuOpenType>(({ $openMenu, theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 230,
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'all .5s ease',

  '&:hover': {
    cursor: 'pointer',
  },

  ...(!$openMenu && {
    bottom: 0,
    opacity: 0,
  }),
}));

const MailIconBtn = MuiStyled(IoMail)<MenuOpenType>(({ $openMenu, theme }) => ({
  color: theme.palette.common.white,
  transition: 'all .5s ease',

  ...(!$openMenu && {
    bottom: 0,
    opacity: 0,
  }),

  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.secondary.dark,
  }),
}));
