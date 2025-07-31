// src/components/common/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';
// No longer need to import your Theme type here

// We can remove the <GlobalStyleProps> generic.
// 'styled-components' now automatically knows the shape of the 'theme' prop.
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    transition: all 0.3s ease-in-out;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.name === 'Theme 3' ? theme.fonts.special : theme.fonts.main};
    font-weight: bold;
  }
`;