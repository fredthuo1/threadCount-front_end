import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbars from '../Navbars/Navbars';
import { Card, CardDeck } from 'react-bootstrap';
import Carousels from '../Carousel/Carousels';
import axios from 'axios';
import Business from '../Business/Business';
import { Link } from 'react-router-dom';
import './Businesses.css';

class Businesses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            businesses: []     
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const dataUrl = 'http://127.0.0.1:8887/demo.json';
        axios.get(dataUrl)
        .then(
            (result) => {
                const businesses = result.data.Businesses
                this.setState({
                    businesses,
                    isLoaded: true
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        .then(
            console.log(this.state)
        )
    }

	render() {
        const { error, isLoaded, businesses } = this.state;

        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

		return (
			<div>
                 <div className="carousel">
                 <Carousels />
                 </div>
				     <CardDeck className="cardDeck">
                          { this.state.businesses.map( business => 
                              <Card className="card">
                                <Card.Img variant="top" src={ business.logo } />
                                <Card.Body>
                                  <Card.Title> { business.name }</Card.Title>
                                  <Card.Text>
                                    <p>{ business.address.street }</p>
                                    { business.address.city }
                                    , { business.address.state }
                                    , { business.address.zip }
                                  </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                              </Card>

                          )}
                    </CardDeck>
			</div>
		)
        }
	}

}

export default Businesses;