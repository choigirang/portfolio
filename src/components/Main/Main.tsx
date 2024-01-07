import React from 'react';
import styled, { keyframes } from 'styled-components';

const textDuration = '5000ms';
const waveDuration = '5000ms';

const waveAnimation = keyframes`
  0% {
    transform: scale(0);
    width: 2.2rem;
  }
  10% {
    transform: scale(1);
  }
  23% {
    width: 2.2rem;
  }
  32% {
    width: 6.1rem;
  }
  42% {
    width: 5rem;
    transform: rotateY(0deg) scale(1, 1);
  }
  51% {
    transform: rotateY(90deg) scale(0.6, 0.2);
  }
  52% {
    transform: rotateY(90deg) scale(0);
  }
  100% {
    transform: rotateY(90deg) scale(0);
  }
`;

const textAnimation = keyframes`
  0%, 30% {
    transform: translate3d(0, 0, 0);
  }
  45%, 100% {
    transform: translate3d(0, -4rem, 0);
  }
`;

const textWAnimation = keyframes`
  0%, 38%, 100% {
    transform: translate3d(0, -4rem, 0);
  }
  69% {
    transform: translate3d(0, 0, 0);
  }
`;

const coastAnimation = keyframes`
  0%, 23% {
    transform: translate3d(0, 0, 0);
  }
  50%, 100% {
    transform: translate3d(16rem, 0, 0);
  }
`;

const Container = styled.div`
  position: absolute;
  width: 17rem;
  height: 10rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Coast = styled.div`
  position: absolute;
  left: 1.3rem;
  bottom: 1.7rem;
  width: 6.2rem;
  height: 2.2rem;
  display: inline-block;
  animation: ${coastAnimation} ${waveDuration} linear infinite;
  transform: translateZ(0);

  &.delay {
    animation-delay: calc(2100ms / 2);
  }
`;

const WaveRelWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 3rem;
  perspective-origin: 0%, 50%;
`;

const Wave = styled.div`
  position: absolute;
  width: 6.2rem;
  height: 2.2rem;
  border-radius: 1.1rem;
  background: radial-gradient(
    ellipse at center,
    rgba(116, 241, 252, 1) 0%,
    rgba(50, 230, 255, 1) 73%,
    rgba(21, 199, 250, 1) 100%
  );
  display: inline-block;
  animation: ${waveAnimation} ${waveDuration} linear infinite;
  will-change: width;
  transform: translateZ(0) scale(0);

  &.delay {
    animation-delay: calc(2100ms / 2);
  }
`;

const Text = styled.div`
  color: #fff;
  font-size: 6rem;
  font-weight: 900;
  display: inline-block;
  position: absolute;
  bottom: 0;
  transform: translatez(0);

  &.text-w {
    left: 0rem;
    transform: translate3d(0, -4rem, 0);
    animation: ${textWAnimation} ${textDuration} ease-in infinite;
  }

  &.text-a {
    left: 5.4rem;
    animation-delay: 150ms;
  }

  &.text-v {
    left: 9.6rem;
    animation-delay: 230ms;
  }

  &.text-e {
    left: 13rem;
    animation-delay: 310ms;
  }

  &.text-w,
  &.text-a,
  &.text-v,
  &.text-e {
    animation: ${textAnimation} ${textDuration} ease-in infinite;
  }
`;

export default function Main() {
  return (
    <Container>
      <Coast>
        <WaveRelWrap>
          <Wave />
        </WaveRelWrap>
      </Coast>
      <Coast className="delay">
        <WaveRelWrap>
          <Wave className="delay" />
        </WaveRelWrap>
      </Coast>
      <Text className="text text-w">w</Text>
      <Text className="text text-a">a</Text>
      <Text className="text text-v">v</Text>
      <Text className="text text-e">e</Text>
    </Container>
  );
}
