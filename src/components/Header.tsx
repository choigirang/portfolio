import React, { useEffect, useState } from 'react';
import { HeaderScrollState, TabPropsType } from '../type/headerType';
import { Link } from 'react-router-dom';
import { Tabs, Tab, useTheme, styled as MuiStyled } from '@mui/material';
import useRouteMatch from '../hooks/useRouteMatch';

// 주소 목록
const lists = ['Home', 'About', 'Skills', 'Experience'];

/**
 *
 * @returns router에 따른 헤더
 */
export default function Index() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  const routeMatch = useRouteMatch();

  const theme = useTheme();

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

  console.log(activeSection);

  return (
    <Header $scroll={scroll} theme={theme}>
      <Logo></Logo>
      <Tabs
        value={'/' + activeSection}
        sx={{ '& .MuiTabs-indicator': { backgroundColor: 'transparent' }, '& .Mui-selected': { color: 'purple' } }}>
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
  backgroundColor: $scroll ? 'transparent' : theme.palette.mode === 'dark' ? '#000f1f' : '#ffe196',
  color: theme.palette.mode === 'dark' ? 'white' : 'white',
  boxSizing: 'border-box',
  transition: 'all 1s',
  zIndex: 1,

  '.visited': {
    color: theme.palette.mode === 'dark' ? '#ffb700' : '#000f1f',
  },
}));

const TabList = MuiStyled(Tab)<TabPropsType>(({ theme }) => ({
  '.Mui-selected': {
    color: theme.palette.mode === 'dark' ? '#ffb700' : '#000f1f',
  },
}));

const Logo = MuiStyled('a')({
  width: '150px',
  height: '100%',
  backgroundColor: 'black',
});
