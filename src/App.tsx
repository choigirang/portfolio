import React, { useMemo } from 'react';
import Header from './components/Header';
import Main from './components/sections/Main/Index';
import Skills from './components/sections/Skills/Index';
import Footer from './components/sections/Footer/Index';
import { BrowserRouter } from 'react-router-dom';
import About from './components/sections/About/Index';
import { ThemeProvider, styled as MuiStyled } from '@mui/material';
import createCustomTheme from './theme/palette';
import { useColorMode } from './hooks/useColorMode';
import Project from './components/sections/Project/Index';
import Contact from './components/sections/\bContact/Index';

function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Header />
          <Main />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = MuiStyled('div')({
  width: '100%',
  height: '200vh',
});
