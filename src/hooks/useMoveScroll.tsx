import React from 'react';

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
