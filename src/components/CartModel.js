// src/components/CartModal.js
import React from 'react';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { useCart } from './CartContext';  // Import useCart

const CartModal = ({ show, onHide }) => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <div>
                  <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                  <Button 
                    variant="danger" 
                    size="sm" 
                    className="float-end" 
                    onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <div className="mt-3">
          <h4>Total: ${getTotalPrice()}</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
