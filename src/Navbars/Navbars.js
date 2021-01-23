import React, { Component } from 'react';
import {NavBar, Navbar, Form, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Businesses from '../Businesses/Businesses';
import SecondNavbar from '../Navbars/SecondNavbar';
import Login from '../Login/Login';
import AboutUs from '../AboutUs/AboutUs';
import './Navbar.css';

class Navbars extends Component {
	

	render() {
		return (
        <Router>
			<div>
				 <Navbar sticky="top" bg="dark" className="navbar" variant="dark">
                    <Navbar.Brand className="link" as={ Link } to="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link as={ Link } to= {"/AboutUs" }>About Us</Nav.Link>
                    </Nav>
                    <Form className="search" inline>
                      <FormControl className="searchbar" type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav className="register">
                      <Nav.Link as={ Link } to= {"/Register" }>Register</Nav.Link>
                    </Nav>
                    <Nav className="login">
                      <Nav.Link as={ Link } to= {"/Login" }>Login</Nav.Link>
                    </Nav>
                  </Navbar>

                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/AboutUs' component={AboutUs} />
                      <Route path='/Register' component={Register} />
                      <Route path='/Login' component={Login} />
                  </Switch>
			</div>
        </Router>
		)
	}

}

export default Navbars;