import { keyframes } from '@emotion/react';

export const textEaseEffect = keyframes`
    from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
