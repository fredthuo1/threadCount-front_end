import React, { Component } from 'react';
import './Featured_Collection.css';

class Featured_Collection extends Component {

	render() {
		return (
			<div className="featured_collections" >
				<div>
					<h1>Our Products</h1> 
					Add our products to weekly line up
				</div>
				<div className="buttons" > 
					<button className="button">WOMEN SHOES</button>
					<button className="button">WOMEN SHOES</button>
					<button className="button">WOMEN SHOES</button>
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

export default Featured_Collection;