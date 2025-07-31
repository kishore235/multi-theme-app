// src/components/Layout/Layout.tsx

import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/themes';
import Header from '../header';

// New component to dynamically calculate padding based on header height
const MainContentWrapper = styled.div`
  /* Default padding for desktop header */
  padding-top: 80px;

  /* --- MOBILE STYLES --- */
  /* The mobile header is taller, so we need more space */
  @media (max-width: 768px) {
    padding-top: 180px; /* Adjust this value based on your mobile header's final height */
  }
`;

// Layout for Theme 1 and 3
const DefaultLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding on mobile */
  }
`;

// Layout for Theme 2 (with Sidebar)
const SidebarLayout = styled.div`
  display: flex;

  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack sidebar and content */
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  height: calc(100vh - 80px); 
  position: fixed;
  top: 80px;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  
  h3 {
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => (theme.name === 'Theme 2' ? 'bold' : 'normal')};
  }

  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    position: static; /* Remove fixed positioning */
    width: 100%; /* Take full width */
    height: auto; /* Height should be based on content */
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding: 1rem;
  }
`;

const ContentWithSidebar = styled.main`
  flex: 1;
  margin-left: 250px; // Space for the fixed sidebar
  padding: 2rem;

  /* --- MOBILE STYLES --- */
  @media (max-width: 768px) {
    margin-left: 0; /* Remove the margin */
    padding: 1rem;
  }
`;


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainContentWrapper>
      <Header />
      {theme.name === 'Theme 2' ? (
        <SidebarLayout>
          <Sidebar>
            <h3>Navigation</h3>
            <p>This is a sidebar, unique to Theme 2's structure.</p>
          </Sidebar>
          <ContentWithSidebar>{children}</ContentWithSidebar>
        </SidebarLayout>
      ) : (
        <DefaultLayout>{children}</DefaultLayout>
      )}
    </MainContentWrapper>
  );
};

export default Layout;