import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { HeaderScrollState } from '../type/mainType';
import { matchPath, Link, PathMatch, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// 주소 목록
const lists = {
  Home: 0,
  About: 1000,
  Skills: 2000,
  Experience: 3000,
};

/**
 *
 * @returns router에 따른 헤더
 */
export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);

  const routeMatch = useRouteMatch(['/Home', '/About', '/Skills', '/Experience']);
  const currentTab = routeMatch;

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

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scroll]);

  return (
    <Head $scroll={scroll}>
      <Logo></Logo>
      <Tabs value={currentTab}>
        {Object.keys(lists).map(list => (
          <Tab
            key={list}
            label={list.replace('/', '')}
            value={'/' + list}
            to={list}
            component={Link}
            onClick={() => scrollHandler(list)}></Tab>
        ))}
      </Tabs>
    </Head>
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

const Head = styled.div<HeaderScrollState>`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 calc((100vw - 1280px) / 2);
  /* background-color: ${props => (props.$scroll ? 'transparent' : 'black')}; */
  box-sizing: border-box;
  transition: all 1s;
  z-index: 1;
  border: dotted 1px black;
`;

const Logo = styled.a`
  width: 150px;
  height: 100%;
  background-color: black;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 500px;
  height: 100%;
  background-color: white;
`;
