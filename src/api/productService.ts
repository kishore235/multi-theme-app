import axios from 'axios';
import { Product } from '../types';

const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
