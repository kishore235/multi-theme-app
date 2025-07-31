import React, { useContext } from 'react';
import styled from 'styled-components';
import { useProducts } from '../hooks/useProducts';
import Card from '../components/common/Card';
import { ThemeContext } from '../context/themes';
import { Button } from '../components/common/Button';

const PageTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const ContentGrid = styled.div<{ themeName: string }>`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: ${({ themeName }) =>
    themeName === 'Theme 3'
      ? 'repeat(auto-fill, minmax(250px, 1fr))' // Grid for Theme 3
      : '1fr'}; // List for Theme 1 & 2
`;

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();
  const { theme } = useContext(ThemeContext);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PageTitle>Welcome to our Store!</PageTitle>
      <p style={{marginBottom: '2rem'}}>This is the home page. The layout of the product list below changes based on the selected theme. Theme 3 uses a responsive grid layout, while Themes 1 and 2 use a simpler list view.</p>
      <Button style={{marginBottom: '2rem'}}>Dummy Button</Button>
      
      <ContentGrid themeName={theme.name}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ContentGrid>
    </div>
  );
};

export default Home;