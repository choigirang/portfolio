import React, { useEffect, useState } from 'react';
import { HeaderScrollState, TabPropsType } from '../type/headerType';
import { Link } from 'react-router-dom';
import { Tabs, Tab, styled as MuiStyled, Typography } from '@mui/material';

// 주소 목록
const lists = ['Home', 'About', 'Skills', 'Project', 'Contact'];

/**
 *
 * @returns router에 따른 헤더
 */
export default function Index() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  const currentPath = window.location.pathname;

  // 페이지 전환
  const pageScrollHandler = (e: string) => {
    document.getElementById(e)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // scroll에 따른 Header bg 변경
  useEffect(() => {
    let animationFrameId: number;

    const scrollHandler = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (window.scrollY > 100 && !scroll) {
          setScroll(true);
        } else if (window.scrollY <= 100 && scroll) {
          setScroll(false);
        }
      });
    };
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scroll]);

  // 화면에 들어오는 컴포넌트에 따른 주솟값 변경
  useEffect(() => {
    const scrollChangeRouter = () => {
      const section = lists.find(list => {
        const element = document.getElementById(list);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (section && section !== activeSection) {
        setActiveSection(section);
        window.history.replaceState(null, '', `/${section}`);
      }
    };

    window.addEventListener('scroll', scrollChangeRouter);

    return () => {
      window.removeEventListener('scroll', scrollChangeRouter);
    };
  }, [activeSection]);

  return (
    <Header $scroll={scroll}>
      <Logo variant="h1">Girang's</Logo>
      <Tabs
        value={currentPath !== '/' ? currentPath : '/Home'}
        sx={{ '& .MuiTabs-indicator': { backgroundColor: 'transparent' } }}>
        {lists.map(list => (
          <TabList
            key={list}
            label={list.replace('/', '')}
            value={'/' + list}
            to={list}
            component={Link}
            onClick={() => pageScrollHandler(list)}
          />
        ))}
      </Tabs>
    </Header>
  );
}

const Header = MuiStyled('div')<HeaderScrollState>(({ theme, $scroll }) => ({
  display: 'flex',
  position: 'fixed',
  top: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  padding: '0 calc((100vw - 1280px) / 2)',
  color: 'white',
  boxSizing: 'border-box',
  transition: 'all 1s',
  zIndex: 1,

  '.visited': {
    fontWeight: '500',
    color: theme.palette.primary.light,
  },

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.primary.dark,

    ':visited': {
      color: theme.palette.primary.dark,
    },
  }),
}));

const TabList = MuiStyled(Tab)<TabPropsType>(({ theme }) => ({
  '.Mui-selected': {
    color: theme.palette.text.secondary,
  },

  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.common.white,
    '.Mui-selected': {
      color: `${theme.palette.primary.main} !important`,
    },
  }),
}));

const Logo = MuiStyled(Typography)(({ theme }) => ({
  width: '150px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,

  ...(theme.palette.mode === 'dark' && {
    color: 'white',
  }),
}));
