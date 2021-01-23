import React, { Component } from 'react';
import {NavBar, Navbar, Form, Col, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';

class Register extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			middleName: '',
			lastName: '',
			emailAddress: '',
			password: '',
			confirmPassword: '',
			accountType: '',
			phoneNumber: '',
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
			const userRegistration = {
				firstName: this.state.firstName,
				middleName: this.state.middleName,
				lastName: this.state.lastName,
				emailAddress: this.state.emailAddress,
				password: this.state.password,
				accountType: this.state.accountType,
				phoneNumber: this.state.phoneNumber
			}

			axios.post( `http://localhost:8080/registration`, userRegistration)
				.then(res => {
					console.log(res);
					console.log(res.data);
					results = res;
				})
				.then(res => {
					data = results.data
					if (data === 'CONFLICT') {
						alert("Email is already registered! Try using another email or login in with " + this.state.emailAddress)
					}
				})

		}
	}
	

	render() {
		return (
			<div className="register_form">
			<Form onSubmit={ this.handleSubmit}>
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
                  <Form.Control type="email" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
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

			  <Form.Row>
			  <Form.Group as={Col} controlId="formGridAccountType">
				  <Form.Label>Account Type</Form.Label>
				  <Form.Control as="select" name="accountType" defaultValue="Business" onChange={this.handleChangle}>
					<option name="accountType" value="Choose..." >Choose...</option>
					<option name="accountType" value="Customer" >Customer</option>
					<option name="accountType" value="Seller" >Business</option>
				  </Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" name="phoneNumber" placeholder="Phone Number" onChange={this.handleChangle} />
                </Form.Group>
			  </Form.Row>


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
			</div>
		)
	}

}

export default Register;