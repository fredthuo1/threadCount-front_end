import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import LosAngelesBanner from '../images/Los Angeles Banner.png'
import NewYorkBanner from '../images/New York Banner.png'
import StLouisBanner from '../images/St. Louis Banner.png'
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
                  src={StLouisBanner}
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