import React, { useMemo } from 'react';
import Header from './components/Header';
import Main from './components/Main/Index';
import Skills from './components/Skills/Index';
import Experience from './components/Experience/Index';
import Footer from './components/Footer/Index';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About/Index';
import { ThemeProvider, styled as MuiStyled } from '@mui/material';
import createCustomTheme from './theme/palette';
import { useColorMode } from './hooks/useColorMode';

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
          <Experience />
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
