import React, { Component } from 'react';
import {NavBar, Navbar, Form, Col, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import axios from 'axios';
import './Login.css';

class Login extends Component {
	constructor(props) {
			super(props);
			this.state = {
				emailAddress: '',
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

		const login = {
				emailAddress: this.state.emailAddress,
				password: this.state.password,
		}

		axios.post( `http://localhost:8080/registration`, login)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})

			if (res => 'CONFLICT') {
				alert("Invalid Credentials! Try again.")
			}
	}
	

	render() {
		return (
			<div className="login_form">
			<Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
			</div>
		)
	}

}

export default Login;