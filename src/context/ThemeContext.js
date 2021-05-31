import { createContext, useContext } from 'react';
import { Appearance } from 'react-native';

export const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: mode => console.log(mode),
});

export const useTheme = () => useContext(ThemeContext);
