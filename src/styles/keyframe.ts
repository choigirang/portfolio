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

export const planeContainerAni = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(100px);
  }
`;

export const planeAni = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const sunAni = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0);
  }
`;

export const reverseAni = keyframes`
  0%{
    transform: scaleX(1);
  }
  50%{
    transform: scaleX(-1);
  }
`;

export const turtleFrontFoot = keyframes`
  0%, 100% {
    transform: translate(0,0);
  }
  25% {
    transform: translate(10px, -20px);
  }
  50%{
    transform: translate(20px, 0);
  }
`;

export const turtleBackFoot = keyframes`
  0%, 50%, 100%{
    transform: translate(0,0);
  }60%{
    transform: translate(10px, -20px);

  }80%{
    transform: translate(20px, 0);
  }
`;
