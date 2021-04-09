import React, { Component } from 'react';
import {NavBar, Navbar, Form, Col, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import axios from 'axios';
import './Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
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

		const authRequest = {
				username: this.state.username,
				password: this.state.password,
		}

		axios.post( `http://localhost:8080/authenticate`, authRequest)
				.then(res => {
					localStorage.setItem("authorization", res.data.token);
				})
	}
	
	

	render() {
		return (
			<div className="login_form">
			<Form onSubmit={ this.handleSubmit}>
			<Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter username" onChange={this.handleChangle} />
                </Form.Group>
            </Form.Row>

			<Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChangle} />
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

export default Login;