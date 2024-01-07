import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { HeaderScrollState } from '../../type/mainType';

export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);

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
      <Nav>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Skills</Link>
        <Link>Expreience</Link>
      </Nav>
    </Head>
  );
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
  background-color: ${props => (props.$scroll ? 'transparent' : 'black')};
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

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;
