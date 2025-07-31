

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../themes/themes';
import { Theme } from '../types';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (themeName: 'theme1' | 'theme2' | 'theme3') => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.theme1,
  toggleTheme: () => {},
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'theme1' | 'theme2' | 'theme3'>(() => {
    const savedTheme = localStorage.getItem('themeName');
    return (savedTheme as 'theme1' | 'theme2' | 'theme3') || 'theme1';
  });

  useEffect(() => {
    localStorage.setItem('themeName', themeName);
  }, [themeName]);

  const toggleTheme = (name: 'theme1' | 'theme2' | 'theme3') => {
    setThemeName(name);
  };

  const currentTheme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
