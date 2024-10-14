import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';  // Import ProductCard

const ProductGrid = () => {
  const products = [
    { id: 1, image: 'https://cdn.dmart.in/images/products/LHALWA200gmLal16xx040521_5_P.jpg', name: 'Lal Bombay Halwa', price: '29.99', discount: '10' },
    { id: 2, image: 'https://cdn.dmart.in/images/products/OCT120000656xx17OCT23_5_P.jpg', name: 'Royal Rasgulla', price: '39.99', discount: '15' },
    { id: 3, image: 'https://cdn.dmart.in/images/products/DEC120001970xx06DEC23_5_P.jpg', name: 'Royal Peanut Chikki', price: '19.99', discount: '5' },
    { id: 4, image: 'https://cdn.dmart.in/images/products/JUN130000491xx9JUN22_5_P.jpg', name: 'Tea - Lemon Ginger', price: '49.99', discount: '20' },
    { id: 5, image: 'https://cdn.dmart.in/images/products/MAY120003408xx15MAY24_5_P.jpg', name: 'Orange Soan Papdi', price: '24.99', discount: '25' },
    { id: 6, image: 'https://cdn.dmart.in/images/products/MAY120002321xx18MAY22_1_P.jpg', name: 'Shree Peanut Chikki', price: '34.99', discount: '30' },
  ];

  return (
    <Row className="g-4 justify-content-center">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Row>
  );
};

export default ProductGrid;
