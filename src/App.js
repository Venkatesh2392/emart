import './App.css';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductGrid from './components/CardLayout';
import ImageAndTextExample from './components/Cards';
import CarouselComponent from './components/CarouselSlide';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import DmartNavbar from './components/Navbar';
import Offerzone from './components/OfferCards';
import Para from './components/Paragraph';
import PopularCategories from './components/Popularcat';
import Carousel from './components/Carousel';
import Login from './components/Login';
import CreateAcc from './components/CreateAcc';
import CartPage from './components/CartPage';
import { CartProvider, useCart } from './components/CartContext';

function App() {
  return (
    <div className="App">
      {/* Wrap the entire app with CartProvider */}
      <CartProvider>
        {/* Navbar component */}
        <DmartNavbar />

        {/* Routes for different pages */}
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Carousel />
                  <HeroSection />
                  <PopularCategories />
                  <ImageAndTextExample />
                  <p className="p1">This Week's Savers</p>
                  <ProductGrid />
                  <CarouselComponent />
                  <p className="p1">Offer Zone</p>
                  <Offerzone />
                  <Para />
                  <Footer />
                </>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/createAccount" element={<CreateAcc />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>

        {/* Cart Modal (modal that appears when the user wants to view the cart) */}
        <CartModal />
      </CartProvider>
    </div>
  );
}

// Cart Modal to show items in the cart
const CartModal = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart(); // Use Cart Context here
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <Modal show={showCart} onHide={toggleCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                  {item.name} - ${item.price} (Discount: {item.discount}%) x {item.quantity}
                </div>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleCart}>
          Close
        </Button>
        <Button variant="primary" onClick={toggleCart}>
          Checkout (${getTotalPrice()})
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default App;
