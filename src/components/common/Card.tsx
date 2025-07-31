import styled from 'styled-components';
import { Product } from '../../types';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.base};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all 0.3s ease-in-out;
  
  img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => (theme.name === 'Theme 2' ? 'bold' : 'normal')};
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <CardWrapper>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </CardWrapper>
  );
};

export default Card;