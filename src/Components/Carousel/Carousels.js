import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import LosAngelesBanner from '../Images/Los Angeles Banner.png'
import NewYorkBanner from '../Images/New York Banner.png'
import { Link } from 'react-router-dom';
import Artboard from '../Images/Artboard 4.png'
import './Carousel.css';

class Carousels extends Component {

	render() {
		return (
			<Carousel>
              <Carousel.Item interval={1000}>
       
                <img
                  className="curasel_image"
                  src={LosAngelesBanner}
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
                  src={NewYorkBanner}
                  alt="Second slide"
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
                  src={Artboard}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1>About Us</h1>
                  <h3>Find The Nicest Attires</h3>
                  <Button variant="warning">
                    <Link to="/AboutUs">About Us
                    </Link>
                  </Button>{' '}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
		)
	}
}

export default Carousels;