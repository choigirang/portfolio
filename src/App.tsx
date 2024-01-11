import React from 'react';
import Header from './components/Header';
import { styled } from 'styled-components';
import Main from './components/Main/Index';
import Skills from './components/Skills/Index';
import Experience from './components/Experience/Index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/Index';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Main />
        <About />
        <Skills />
        <Experience />
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;
