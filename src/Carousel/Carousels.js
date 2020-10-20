import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

class Carousels extends Component {

	render() {
		return (
			<Carousel className="carousel">
              <Carousel.Item>
                <img
              
                  className="image"
                  src="https://censolutions.com/wp-content/uploads/2018/08/765297-business-wallpapers-1920x1080-smartphone.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src="https://censolutions.com/wp-content/uploads/2018/08/765297-business-wallpapers-1920x1080-smartphone.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src="https://censolutions.com/wp-content/uploads/2018/08/765297-business-wallpapers-1920x1080-smartphone.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
		)
	}
}

export default Carousels;