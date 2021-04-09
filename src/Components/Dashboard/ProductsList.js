import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Sidebar from '../Sidebar/Sidebar'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductsList.css';
import { useHistory } from "react-router-dom";


const ProductsList = (props)=> {
	return (
    <>
        <Sidebar />
		<Container>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
			<Row>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
				<Col className="products_column">
                        <div className="product_card">
                          <img className="img" src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/2.jpg" ></img>
                          <p>New Luxury Men's Slim Fit Shirt Short Sleeve</p>
                          <p>Some text</p>
                          <h5>$11.90</h5>
                        </div>
                </Col>
			</Row>
		</Container>
    </>
	)
}

export default ProductsList;