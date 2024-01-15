import React, { useEffect, useState } from 'react';
import { HeaderScrollState } from '../type/mainType';
import { matchPath, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, useTheme, styled } from '@mui/material';

// 주소 목록
const lists = ['Home', 'About', 'Skills', 'Experience'];

/**
 *
 * @returns router에 따른 헤더
 */
export default function Index() {
  const [scroll, setScroll] = useState<boolean>(false);

  const routeMatch = useRouteMatch(['/Home', '/About', '/Skills', '/Experience']);

  const theme = useTheme();

  const scrollHandler = (e: string) => {
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

  return (
    <Header $scroll={scroll} theme={theme}>
      <Logo></Logo>
      <Tabs
        value={routeMatch}
        sx={{ '& .MuiTabs-indicator': { backgroundColor: 'transparent' }, '& .Mui-selected': { color: 'purple' } }}>
        {lists.map(list => (
          <Tab
            key={list}
            label={list.replace('/', '')}
            value={'/' + list}
            to={list}
            component={Link}
            onClick={() => scrollHandler(list)}
          />
        ))}
      </Tabs>
    </Header>
  );
}

/**
 *
 * @param patterns router의 주솟값
 * @returns useLoaction으로 현재 주솟값을 확인하여 mui Tab과 매칭
 */
function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  // 주솟값 매칭
  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch.pattern.path;
    }
  }

  return null;
}

const Header = styled('div')<HeaderScrollState>(({ theme, $scroll }) => ({
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

  '.Mui-selected': {
    color: theme.palette.mode === 'dark' ? '#ffb700' : '#000f1f',
  },

  '.visited': {
    color: theme.palette.mode === 'dark' ? '#ffb700' : '#000f1f',
  },
}));

const Logo = styled('a')({
  width: '150px',
  height: '100%',
  backgroundColor: 'black',
});
