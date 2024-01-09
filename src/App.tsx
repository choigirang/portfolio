import React from 'react';
import Header from './components/Header';
import { styled } from 'styled-components';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;
