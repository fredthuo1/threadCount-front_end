import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import { Link } from 'react-router-dom';


const Navbars = ()=> {
	return (
        <Navbar className="nav-container" bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 navbar-dark" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3" to="/">Home</Link>
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3" to="/aboutUs">About Us</Link>
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3" to="/login">Login</Link>
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3 register" to="/register">Register</Link>
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3 dashboard" to="/dashboard">Dashboard</Link>
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3 dashboard" to="/admindashboard">Admin Dashboard</Link>
                    <Link style={{ color: "white" }} className="nav-link ml-3 mr-3 dashboard" to="/customerdashboard">Customer Dashboard</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	)
}

export default Navbars;