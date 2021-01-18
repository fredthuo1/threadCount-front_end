import React, { Component } from 'react';
import {NavBar, Navbar, Form, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Businesses from '../Businesses/Businesses';
import Login from '../Login/Login';

class SecondNavbar extends Component {
	

	render() {
		return (
        <Router>
			<div>
				 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={ Link } to="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link as={ Link } to= {"/Businesses" }>Businesses</Nav.Link>
                    </Nav>
                    <Nav className="register">
                      <Nav.Link as={ Link } to= {"/Register" }>Register</Nav.Link>
                    </Nav>
                    <Nav className="login">
                      <Nav.Link as={ Link } to= {"/Login" }>Login</Nav.Link>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-info">Search</Button>
                    </Form>
                  </Navbar>
                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/Businesses' component={Businesses} />
                      <Route path='/Register' component={Register} />
                      <Route path='/Login' component={Login} />
                  </Switch>
			</div>
        </Router>
		)
	}

}

export default SecondNavbar;