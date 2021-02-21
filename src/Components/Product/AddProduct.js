import React, { Component, useEffect } from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

class AddProduct extends Component { 
		constructor(props) {
			super(props);
			this.state = {
				businessName: '',
				businessCategory: '',
				businessDescription: '',
				businessImages: [],
				productsCategories: [],
				businessOwner: '',
				products: '',
				businessOrders: [],
				reviews: [],
				invoices: [],
				reports: []
			}

			this.handleChangle = this.handleChangle.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChangle(event) {
				let field = event.target.name;
				let val = event.target.value;
				this.setState({ ...this.state, [field]: val })
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
				<div>
				<Form>
                 <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" name="firstName" onChange={this.handleChangle} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMiddleName">
                      <Form.Label>Product Description</Form.Label>
                      <Form.Control type="text" placeholder="Middle Name" name="middleName" onChange={this.handleChangle} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Product Size</Form.Label>
                      <Form.Control type="text" name="lastName" placeholder="Last Name" onChange={this.handleChangle} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Product Color</Form.Label>
                      <Form.Control type="text" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
                    </Form.Group>
                  </Form.Row>
				  
				  <Form.Row>
				   <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Product Material</Form.Label>
                      <Form.Control type="text" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
                    </Form.Group>
                  </Form.Row>

			       <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Original Price</Form.Label>
                      <Form.Control type="text" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
                    </Form.Group>
                  
				    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>New Price</Form.Label>
                      <Form.Control type="text" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChangle} />
                    </Form.Group>
                  </Form.Row>

				   <Form.Row>
				   <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control type="text" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
                    </Form.Group>
                  </Form.Row>

				   <Form.Row>
				   <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Product Category</Form.Label>
                      <Form.Control type="text" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
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

				<Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Product Images</Form.Label>
                      <Form.Control type="email" name="emailAddress" placeholder="Enter email" onChange={this.handleChangle} />
                    </Form.Group>
                  </Form.Row>


                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
				<Form>
				  <Form.Group>
					<Form.File id="exampleFormControlFile1" label="Example file input" />
				  </Form.Group>
				</Form>
			</div>
		)
	}
}

export default AddProduct;