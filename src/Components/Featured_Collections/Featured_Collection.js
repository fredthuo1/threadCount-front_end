import React, { Component } from 'react';
import {NavBar, Navbar, Form, Button, FormControl, Nav, NavItem} from 'react-bootstrap';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Businesses from '../Businesses/Businesses';
import Featured_Collection_Nav from './Featured_Collection_Nav';
import Login from '../Login/Login';
import './Featured_Collection.css';

class Featured_Collection extends Component {

	render() {
		return (
			<div className="featured_collections" >
				<div>
					<h1>Our Products</h1> 
					Add our products to weekly line up
				</div>

                <Featured_Collection_Nav />

				<div className="products_row"> 
					 <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                     </div>

                     <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                     </div>
  
                     <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                     </div>
  
                      <div className="products_column">
                        <div class="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                      </div>

                       <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                      </div>

                      <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                     </div>

                     <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                     </div>
  
                     <div className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                     </div>
				</div>
			</div>
		)
	}

}

export default Featured_Collection;