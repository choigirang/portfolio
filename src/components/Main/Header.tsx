import React from 'react';
import { styled } from 'styled-components';

export default function Header() {
  return (
    <Head>
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

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0px calc((100% - 1280px) / 2);
  background-color: var(--color-trans-white);
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
  width: 400px;
  height: 100%;
`;

const Link = styled.a`
  flex-grow: 1; /* 추가된 부분 */
  text-align: center; /* 추가된 부분 */
`;
