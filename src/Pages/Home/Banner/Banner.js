import React from 'react';
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'
import slider3 from '../../../images/slider3.jpg'
import Button from 'react-bootstrap/Button'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{'color':'black'}}>Big Saving Season</h1>
            <p style={{ 'color': '#532FF4' }}>Save 20% OFF</p>
            <Button variant="warning">Buy Now</Button>{' '}
            <p style={{ 'color': 'black' }} >Get 20% off On Special Bicycle</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h1 style={{'color':'black'}}>Big Saving Season</h1>
            <p style={{'color':'#532FF4'}}>Save 20% OFF</p>
            <Button variant="warning">Buy Now</Button>{' '}
            <p style={{ 'color': 'black' }} >Get 20% off On Special Bicycle</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h1 style={{'color':'black'}}>Catalogue Season</h1>
            <p style={{'color':'#532FF4'}}>Save 20% OFF</p>
            <Button variant="warning">Buy Now</Button>{' '}
             <p style={{ 'color': 'black' }} >Get 20% off On Special Bicycle</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;