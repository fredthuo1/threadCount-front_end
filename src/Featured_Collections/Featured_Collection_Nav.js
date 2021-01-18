import React, { Component } from 'react';
import {NavBar, Navbar, Form, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Featured_Collection_Nav extends Component {
	

	render() {
		return (
        <Router>
			<div>
				 <Navbar  className="navbar_2" sticky="top" >
					<Nav className="mr-auto_2">
                      <Nav.Link as={ Link } to= {"/" }>MEN</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto_2">
                      <Nav.Link as={ Link } to= {"/" }>WOMEN</Nav.Link>
                    </Nav>
					<Nav className="mr-auto_2">
                      <Nav.Link as={ Link } to= {"/" }>CHILDREN</Nav.Link>
                    </Nav>
                  </Navbar>

                  <Switch>
                      
                  </Switch>
			</div>
        </Router>
		)
	}

}

export default Featured_Collection_Nav;