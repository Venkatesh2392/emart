
import React from 'react';
import { Carousel } from 'react-bootstrap';
 import './Carousel.css'; 

const Carousel1 = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="custom-image d-block w-100"
          src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to GROCERY</h3>
          <p>Find the freshest produce and ingredients at unbeatable prices!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=740&t=st=1728295147~exp=1728295747~hmac=ea3b10723cd13ed84689359939fa3658b233dd45cc6cfba6c5ddbd1b28d2dc87"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ready to Cook Meals</h3>
          <p>Quick and delicious meals ready for you to cook!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src="https://img.freepik.com/free-photo/bar-concept_23-2147798036.jpg?t=st=1728295633~exp=1728299233~hmac=d122f403bba1b513cc15aa3d66b5ab4ad34c7af5d7d1d7e77627d91484dbe413&w=740"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Home Essentials</h3>
          <p>All the appliances and tools you need for your kitchen.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
