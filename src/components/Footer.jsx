import React from 'react';

import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <h1>GROCERY</h1>
          <h4>About Us</h4>
          <p>We are committed to providing the Fresh Grocery</p>
          <p>Wide Range of Products: Grocery stores offer an extensive selection of products, including:

            Fresh produce (fruits and vegetables)
            Dairy and bakery items
            Frozen foods
            Personal care products
            Household cleaning supplies
            Apparel and accessories</p>
        </div>
        <div className="footer-section">
        
          <h4>Quick Links</h4>
          <ul>
            {/* <li><Navbar.Brand href="#" className='logo'><h1>GROCERY</h1></Navbar.Brand></li> */}
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@grocery.com</p>
          <p>Phone: +123 654 3333</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 V-Mart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
