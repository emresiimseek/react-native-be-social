import React from 'react';
import { Alert } from 'react-native';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
