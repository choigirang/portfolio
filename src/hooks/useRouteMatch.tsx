import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

/**
 *
 * @param patterns router의 주솟값
 * @returns useLoaction으로 현재 주솟값을 확인하여 mui Tab과 매칭
 */
export default function useRouteMatch() {
  const { pathname } = useLocation();
  const lists = ['/Home', '/About', '/Skills', '/Experience'];

  // 주솟값 매칭
  for (let i = 0; i < lists.length; i += 1) {
    const pattern = lists[i];

    // 기본값이 "/"일 때 "/Home"과도 일치하도록 처리
    if (i === 0 && pattern === '/') {
      if (pathname === '/') {
        return '/Home';
      }
    }

    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch.pattern.path;
    }
  }

  return null;
}
