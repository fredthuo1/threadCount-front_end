import React, { Component } from 'react';
import {NavBar, Navbar, Form, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Businesses from '../Businesses/Businesses';

class Navbars extends Component {
	

	render() {
		return (
        <Router>
			<div>
				 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={ Link } to="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link as={ Link } to="/Businesses">Businesses</Nav.Link>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-info">Search</Button>
                    </Form>
                  </Navbar>
			</div>
        </Router>
		)
	}

}

export default Navbars;