// src/styled.d.ts

import 'styled-components';
import { Theme } from './types'; // Import your custom Theme type

// Augment the 'styled-components' module
declare module 'styled-components' {
  // Extend the DefaultTheme interface with our custom Theme
  export interface DefaultTheme extends Theme {}
}