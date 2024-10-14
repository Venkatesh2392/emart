import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useCart } from '../components/CartContext';  // Import useCart
import CartModal from './CartModel';  // Import CartModal

function DmartNavbar() {
  const { cartItems } = useCart();  // Get cart items from context
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);  // Count total items
  const [showCartModal, setShowCartModal] = useState(false);  // State to control modal visibility

  // Toggle the modal visibility
  const toggleCartModal = () => setShowCartModal(!showCartModal);

  return (
   <>
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="/" className="logo" style={{ color: '#72bf37' }}>GROCERY</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="me-auto">
          <Nav.Link href="/">All Categories</Nav.Link>
          <Nav.Link href="/">Ready to Cook</Nav.Link>
          <Nav.Link href="/">Home Appliances</Nav.Link>
        </Nav>
        <Form className="d-flex mx-auto">
          <FormControl type="search" placeholder="Search for items..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="/login">Log In / Register</Nav.Link>
          <Nav.Link href="/notifications">Notifications</Nav.Link>
          {/* On Cart Click, open the modal instead of navigating */}
          <Nav.Link onClick={toggleCartModal} style={{ cursor: 'pointer' }}>
            Cart ({cartCount})
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    <CartModal show={showCartModal} onHide={toggleCartModal} />
   </>
  );
}

export default DmartNavbar;
