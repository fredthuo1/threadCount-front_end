import React, { Component } from 'react';
import {NavBar, Navbar, Form, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Businesses from '../Businesses/Businesses';
import SecondNavbar from '../Navbars/SecondNavbar';
import Login from '../Login/Login';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import AddProduct from '../Product/AddProduct/AddProduct';
import './Navbar.css';

class Navbars extends Component {
	

	render() {
		return (
        <Router>
			<div>
				 <Navbar className="NavBar-Container" bg="dark" expand="lg" >
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
                      <Route path='/Product' component={Product} />
                      <Route path='/AddProduct' component={AddProduct} />
                  </Switch>
			</div>
        </Router>
		)
	}

}

export default Navbars;