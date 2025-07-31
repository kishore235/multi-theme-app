// src/themes/themes.ts

import { Theme } from '../types';

export const theme1: Theme = {
  name: 'Theme 1',
  colors: {
    background: '#FFFFFF',
    text: '#333333',
    primary: '#007bff',
    cardBg: '#f8f9fa',
    headerBg: '#FFFFFF',
    borderColor: '#dee2e6',
  },
  fonts: {
    main: 'sans-serif',
    special: 'sans-serif',
  },
  spacing: {
    base: '1rem',
  },
};

export const theme2: Theme = {
  name: 'Theme 2',
  colors: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#bb86fc',
    cardBg: '#1e1e1e',
    headerBg: '#1e1e1e',
    borderColor: '#444444',
  },
  fonts: {
    main: 'serif',
    special: 'serif',
  },
  spacing: {
    base: '1.2rem',
  },
};

export const theme3: Theme = {
  name: 'Theme 3',
  colors: {
    background: '#fdf0e5',
    text: '#4a4a4a',
    primary: '#ff6b6b',
    cardBg: '#ffffff',
    headerBg: '#ffc0cb',
    borderColor: '#ff6b6b',
  },
  fonts: {
    main: 'sans-serif',
    special: "'Pacifico', cursive",
  },
  spacing: {
    base: '1rem',
  },
};

export const themes = { theme1, theme2, theme3 };
