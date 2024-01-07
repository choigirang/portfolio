import React from 'react';
import Header from './components/Main/Header';
import { styled } from 'styled-components';
import Main from './components/Main/Main';

function App() {
  return (
    <Container>
      <Header />
      <Main></Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;
