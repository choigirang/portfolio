import { PaletteMode, createTheme } from '@mui/material';
import Typography from './Typography';

const createCustomTheme = (mode: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: 'Roboto',
      h1: {
        fontSize: 30,
        fontWeight: 700,
      },
    },
    palette: {
      mode,
      common: {
        white: 'white',
        black: 'black',
      },
      primary: {
        main: '#ffb700',
        dark: '#000f1f',
      },
      secondary: {
        main: '#ffe196',
        dark: '#000f1f',
      },
      text: {
        primary: '#ffb700',
        secondary: '#000f1f',
      },
      background: {
        default: '#ffe196',
        // dark: '#000f1f',
      },
      error: {
        main: '#FF4545',
        dark: '',
      },
      info: {
        main: '#1A1A1A',
        dark: '',
      },
    },
  });

export default createCustomTheme;
