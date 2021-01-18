import React, { Component } from 'react';
import './Featured_Products.css';

class Featured_Products extends Component {

	render() {
		return (
			<div className="featured_products" >
				<div>
					Featured Products 
				</div>
				<div className="row"> 
					 <div class="column">
                        <div class="card">
                          <h3>Card 1</h3>
                          <p>Some text</p>
                          <p>Some text</p>
                        </div>
                     </div>

                     <div class="column">
                        <div class="card">
                          <h3>Card 2</h3>
                          <p>Some text</p>
                          <p>Some text</p>
                        </div>
                     </div>
  
                     <div class="column">
                        <div class="card">
                          <h3>Card 3</h3>
                          <p>Some text</p>
                          <p>Some text</p>
                        </div>
                     </div>
  
                      <div class="column">
                        <div class="card">
                          <h3>Card 4</h3>
                          <p>Some text</p>
                          <p>Some text</p>
                        </div>
                      </div>
				</div>
			</div>
		)
	}

}

export default Featured_Products;