import React, { Component } from 'react';
import {NavBar, Navbar, Form, Col, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';

class Register extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			firstName: '',
			middleName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		}

		this.handleChangle = this.handleChangle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChangle(event) {
		let field = event.target.name;
        let val = event.target.value;
        this.setState({ ...this.state, [field]: val });
	}

	handleSubmit(event) {
		event.preventDefault();
		var results = '';
		var data = '';

		if (this.state.password !== this.state.confirmPassword) {
			alert("Password don't match!")
		} else {
			const user = {
				username: this.state.username,
				firstName: this.state.firstName,
				middleName: this.state.middleName,
				lastName: this.state.lastName,
				emailAddress: this.state.email,
				password: this.state.password,
			}

			axios.post( `http://localhost:8080/register`, user)
				.then(res => {
					console.log(res);
					console.log(res.data);
					results = res;
				})
				.then(res => {
					data = results.data
					if (data === 'CONFLICT') {
						alert("Email is already registered! Try using another email or login in with " + this.state.email)
					}
				})

		}
	}
	

	render() {
		return (
			<div className="register_form">
			<Form onSubmit={ this.handleSubmit}>
			<Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter username" onChange={this.handleChangle} />
                </Form.Group>
              </Form.Row>
             <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" name="firstName" onChange={this.handleChangle} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMiddleName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control type="text" placeholder="Middle Name" name="middleName" onChange={this.handleChangle} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" placeholder="Last Name" onChange={this.handleChangle} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChangle} />
                </Form.Group>
              </Form.Row>

			   <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChangle} />
                </Form.Group>
			   </Form.Row>

			   <Form.Row>
				<Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChangle} />
                </Form.Group>
              </Form.Row>

			{/*  <form.row>
			  <form.group as={col} controlid="formgridaccounttype">
				  <form.label>account type</form.label>
				  <form.control as="select" name="accounttype" defaultvalue="business" onchange={this.handlechangle}>
					<option name="accounttype" value="choose..." >choose...</option>
					<option name="accounttype" value="customer" >customer</option>
					<option name="accounttype" value="seller" >business</option>
				  </form.control>
				</form.group>

				<form.group as={col} controlid="formgridpassword">
                  <form.label>phone number</form.label>
                  <form.control type="number" name="phonenumber" placeholder="phone number" onchange={this.handlechangle} />
                </form.group>
			  </form.row>*/}


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
			</div>
		)
	}

}

export default Register;