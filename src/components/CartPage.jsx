import React from 'react';
import { useCart } from './CartContext';  // Import useCart
import { Button, ListGroup } from 'react-bootstrap';

const CartPage = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();  

  console.log(cartItems.length);
  

  return (
    <div className="container my-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <div>
                <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                <Button variant="danger" size="sm" className="float-end" onClick={() => removeFromCart(item.id)}>
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
    </div>
  );
};

export default CartPage;
