import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useCart } from './CartContext';  // Import the useCart hook

const ProductCard = ({ id, image, name, price, discount }) => {
  const { addToCart } = useCart();  // Access addToCart from context

  const handleAddToCart = () => {
    addToCart({ id, image, name, price, discount });
  };

  return (
    <Col xs={12} md={4} lg={2} className="d-flex justify-content-center carddLayout">
      <Card style={{ width: '265px', height: 'auto', padding: '8px 12px' }} className="text-center">
        <Card.Img className="card-img" variant="top" src={image} style={{ height: 'auto', maxHeight: '200px', width: '100%', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column" style={{ flexGrow: 1 }}>
          <Card.Title style={{ margin: '10px 0' }}>{name}</Card.Title>
          <Card.Text className="mb-auto">
            <div>Price: ${price}</div>
            <div>Discount: {discount}%</div>
          </Card.Text>
          <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
