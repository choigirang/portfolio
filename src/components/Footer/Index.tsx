import { styled as MuiStyled, IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ListIcon from '@mui/icons-material/List';
import React, { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import { FaInstagram } from 'react-icons/fa';
import { MenuOpenType } from '../../type/footerType';

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(false);
  const topScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openMenuHandler = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <Container>
      <UpIconBtn onClick={topScroll}>
        <ArrowCircleUpIcon fontSize="large" />
      </UpIconBtn>
      <Menu>
        <ListIconBtn onClick={openMenuHandler}>
          <ListIcon fontSize="large" />
        </ListIconBtn>
        <DarkModeSwitch $openMenu={openMenu} />
        <InstaIconBtn $openMenu={openMenu} />
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
  transition: 'all .5s',
});

const UpIconBtn = MuiStyled(IconButton)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

const Menu = MuiStyled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  transition: 'all 2s',
});

const ListIconBtn = MuiStyled(IconButton)({
  backgroundColor: '#eeeeee',
  borderRadius: '50%',
});

const InstaIconBtn = MuiStyled(FaInstagram)<MenuOpenType>(({ $openMenu }) => ({
  position: 'absolute',
  bottom: 140,
  left: '50%',
  transform: 'translateX(-50%)',

  ...(!$openMenu && {
    display: 'none',
  }),
}));
