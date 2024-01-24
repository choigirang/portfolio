import React, { useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/sections/Footer/Index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, styled as MuiStyled } from '@mui/material';
import createCustomTheme from './theme/palette';
import { useColorMode } from './hooks/useColorMode';

const Main = React.lazy(() => import('./components/sections/Main/Index'));
const Skills = React.lazy(() => import('./components/sections/Skills/Index'));
const About = React.lazy(() => import('./components/sections/About/Index'));
const Project = React.lazy(() => import('./components/sections/Project/Index'));
const Contact = React.lazy(() => import('./components/sections/\bContact/Index'));

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
