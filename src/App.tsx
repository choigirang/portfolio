import React, { Suspense, useEffect, useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/footer/Index';
import { ThemeProvider, styled as MuiStyled } from '@mui/material';
import createCustomTheme from './theme/palette';
import { useColorMode } from './hooks/useColorMode';
import Main from './components/sections/main/Index';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate } from 'react-router-dom';

const About = React.lazy(() => import('./components/sections/about/Index'));
const Skills = React.lazy(() => import('./components/sections/skills/Index'));
const Project = React.lazy(() => import('./components/sections/project/Index'));
const Contact = React.lazy(() => import('./components/sections/contact/Index'));

function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <CircularProgress
            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        }>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
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
  padding: '0 5%',
  gap: 50,
}));
