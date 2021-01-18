import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Carousel.css';

class Carousels extends Component {

	render() {
		return (
			<Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="curasel_image"
                  src="https://cdn.pixabay.com/photo/2013/07/13/14/05/golden-gate-bridge-162096_960_720.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>California</h1>
                  <h3>Find The Hotest Designs in California.</h3>
                  <Button variant="warning">Warning</Button>{' '}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="curasel_image"
                  src="https://cdn.pixabay.com/photo/2013/07/12/13/47/brooklyn-bridge-147301__340.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1>New York</h1>
                  <h3>Find The Coolest Outfits in New York.</h3>
                  <Button variant="warning">Warning</Button>{' '}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="curasel_image"
                  src="https://cdn.pixabay.com/photo/2012/04/12/19/49/gateway-arch-30374__340.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1>St. Louis</h1>
                  <h3>Find The Nicest Attires in St. Louis.</h3>
                  <Button variant="warning">Warning</Button>{' '}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
		)
	}
}

export default Carousels;