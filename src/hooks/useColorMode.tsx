import { ReactNode, createContext, useMemo, useState, useContext } from 'react';
import { ColorModeContextType } from '../type/common';
import { PaletteMode } from '@mui/material';

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  );

  return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
};

export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};
