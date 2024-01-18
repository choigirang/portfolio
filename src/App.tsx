import React, { useMemo } from 'react';
import Header from './components/Header';
import Main from './components/Main/Index';
import Skills from './components/Skills/Index';
import Experience from './components/Experience/Index';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About/Index';
import { PaletteMode, ThemeProvider, styled as MuiStyled } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import DarkModeSwitch from './components/DarkModeSwitch';
import createCustomTheme from './theme/palette';

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

  const theme = useMemo(() => createCustomTheme(mode), [mode]);

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
        <DarkModeSwitch colorMode={colorMode} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

const Container = MuiStyled('div')({
  width: '100%',
  height: '200vh',
});
