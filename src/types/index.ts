// src/types/index.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Defines the structure of our theme objects
export interface Theme {
  name: string;
  colors: {
    background: string;
    text: string;
    primary: string;
    cardBg: string;
    headerBg: string;
    borderColor: string;
  };
  fonts: {
    main: string;
    special: string;
  };
  spacing: {
    base: string;
  };
}