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
const Contact = React.lazy(() => import('./components/sections/\bContact/Index'));

function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  // url 찾아가기 새로고침 시 or
  // 새로고침 시 페이지 유지
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   document.getElementById(location.pathname)?.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // }, [location]);

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
          <Main />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </Container>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

const Container = MuiStyled('div')({
  width: '100%',
  height: '100vh',
  position: 'relative',
  backgroundColor: '#0F1015',
});
