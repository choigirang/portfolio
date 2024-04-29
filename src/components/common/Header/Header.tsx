import React, { useState } from 'react';
import { headerLists } from '../../../constant/info';
import useSize from '../../../hooks/useSize';
import Category from './Category';

export default function Header() {
  const { isMobile } = useSize();

  return (
    <React.Fragment>
      <header
        className="fixed z-100 top-0 left-0 flex justify-start p-10 text-white transition-custom"
        style={{
          width: isMobile ? '100%' : '240px',
          height: isMobile ? 'auto' : '100vh',
          flexDirection: isMobile ? 'row' : 'column',
          gap: isMobile ? '20px' : '48px',
          justifyContent: isMobile ? 'space-between' : 'start',
          backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.809)' : undefined,
          zIndex: 100,
          padding: isMobile ? 20 : 40,
        }}>
        <h1 className="text-2xl font-bold">Girang's</h1>
        <nav>
          <ul className="flex" style={{ flexDirection: isMobile ? 'row' : 'column', gap: isMobile ? '10px' : '40px' }}>
            {headerLists.map(list => (
              <Category key={list} list={list} isMobile={isMobile} />
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
