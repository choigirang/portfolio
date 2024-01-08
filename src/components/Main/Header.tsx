import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { HeaderScrollState } from '../../type/mainType';
import { matchPath, useLocation, Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const list = ['Home', 'About', 'Skills', 'Exprience'];

export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);

  const routeMatch = useRouteMatch(['/inbox/:id', '/drafts', '/trash']);
  const currentTab = routeMatch?.pattern?.path;

  // scroll에 따른 Header bg 변경
  useEffect(() => {
    const scrollHadnler = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', scrollHadnler);

    return () => window.removeEventListener('scroll', scrollHadnler);
  }, []);

  return (
    <Head $scroll={scroll}>
      <Logo></Logo>
      <Tabs>
        <Tab label="Inbox" value="/inbox/:id" to="/inbox/:id" component={Link} />
        <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
        <Tab label="Trash" value="/trash" to="/drafts" component={Link} />
      </Tabs>
    </Head>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
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
  z-index: 0;
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
