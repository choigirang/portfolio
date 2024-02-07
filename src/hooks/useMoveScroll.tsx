import React from 'react';

/**
 *
 * @returns 헤더에서 페이지 이동
 */
export default function useMoveScroll() {
  const scrollToTop = () => {
    return window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToPage = (url: string) => {
    document.getElementById(url)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return { scrollToTop, scrollToPage };
}
