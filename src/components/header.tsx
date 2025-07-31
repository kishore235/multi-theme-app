// src/components/Header/Header.tsx

import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../src/context/themes';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.headerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically */
    padding: 1rem; /* Adjust padding */
    align-items: flex-start; /* Align to the left */
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.special};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    margin-bottom: 1rem; /* Add space below logo */
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%; /* Take full width to help with spacing */
  justify-content: flex-end; /* Push items to the right */

  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack nav links and selector */
    align-items: flex-start; /* Align to the left */
    gap: 1rem; /* Adjust gap for vertical layout */
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeSelector = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};

  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    width: 100%; /* Make selector full-width for easy tapping */
  }
`;

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newThemeName = e.target.value as 'theme1' | 'theme2' | 'theme3';
    toggleTheme(newThemeName);
  };
  
  const getCurrentThemeName = () => {
    if(theme.name === 'Theme 1') return 'theme1';
    if(theme.name === 'Theme 2') return 'theme2';
    return 'theme3';
  }

  return (
    <HeaderWrapper>
      <Logo to="/">HIPSTER</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeSelector onChange={handleThemeChange} value={getCurrentThemeName()}>
          <option value="theme1">Theme 1 (Minimal)</option>
          <option value="theme2">Theme 2 (Dark)</option>
          <option value="theme3">Theme 3 (Colorful)</option>
        </ThemeSelector>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;