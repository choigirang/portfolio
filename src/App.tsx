import React, { Suspense, useEffect, useMemo, useState } from 'react';
import Header from './components/layout/Header';
import Main from './components/sections/main/Index';
import Footer from './components/layout/footer/Index';

import { useColorMode } from './hooks/useColorMode';

import { ThemeProvider, styled as MuiStyled } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import createCustomTheme from './theme/palette';

const About = React.lazy(() => import('./components/sections/about/Index'));
const Skills = React.lazy(() => import('./components/sections/skills/Index'));
const Project = React.lazy(() => import('./components/sections/project/Index'));
const Contact = React.lazy(() => import('./components/sections/contact/Index'));

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const { mode } = useColorMode();
  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    console.log(windowSize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <CircularProgress
            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        }>
        {windowSize.width >= 1024 && <ProcessBar className="progress-bar" style={{ scaleX: scrollYProgress }} />}
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

  /* 타블렛 */
  '@media screen and (max-width:1023px)': {
    width: '100%',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {},
});

const ProcessBar = MuiStyled(motion.div)(({ theme }) => ({
  /* 타블렛 */
  '@media screen and (max-width:1023px)': {
    display: 'none',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {},
}));

const DividContainer = MuiStyled('div')(({ theme }) => ({
  width: 'calc(100% - 240px)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 5%',
  gap: 50,

  /* 타블렛 */
  '@media screen and (max-width:1023px)': {
    width: '100%',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    gap: 0,
  },
}));
