import { useState } from 'react';
import useMoveScroll from '../../../hooks/useMoveScroll';

import { MenuOpenType } from '../../../type/sections';

/**
 *
 * @returns 하단 고정 푸터
 */
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
    <footer className="fixed bottom-0 flex justify-end items-center h-[10%] pr-[5%] transition-custom">
      <button onClick={scrollToTop}></button>
      <div className="relative flex flex-reverse justify-center transition-custom text-yellow-500"></div>
    </footer>
  );
}
