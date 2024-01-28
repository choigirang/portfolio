import React, { Suspense, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/sections/Footer/Index';
import { ThemeProvider, styled as MuiStyled } from '@mui/material';
import createCustomTheme from './theme/palette';
import { useColorMode } from './hooks/useColorMode';
import Main from './components/sections/Main/Index';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate } from 'react-router-dom';

const About = React.lazy(() => import('./components/sections/About/Index'));
const Skills = React.lazy(() => import('./components/sections/Skills/Index'));
const Project = React.lazy(() => import('./components/sections/Project/Index'));
const Contact = React.lazy(() => import('./components/sections/Contact/Index'));

function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <CircularProgress
            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        }>
        <Container>
          <Header />
          <DividContainer>
            <Main />
            <About />
            <Skills />
            <Project />
            <Contact />
          </DividContainer>
          <Footer />
        </Container>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

const Container = MuiStyled('div')({
  width: '100%',
  backgroundColor: '#0F1015',
  display: 'flex',
  justifyContent: 'end',
});

const DividContainer = MuiStyled('div')(({ theme }) => ({
  width: 'calc(100% - 240px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
}));
