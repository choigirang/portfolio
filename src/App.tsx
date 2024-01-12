import React from 'react';
import Header from './components/Header';
import { styled } from 'styled-components';
import Main from './components/Main/Index';
import Skills from './components/Skills/Index';
import Experience from './components/Experience/Index';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About/Index';
import { IconButton, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider>
          <Container>
            <BrowserRouter>
              <Header />
              <Main />
              <About />
              <Skills />
              <Experience />
            </BrowserRouter>
          </Container>
        </StyledEngineProvider>
        <IconButton
          sx={{ position: 'absolute', top: '50%', left: '50%', ml: 2, zIndex: 0 }}
          onClick={colorMode.toggleColorMode}
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;
