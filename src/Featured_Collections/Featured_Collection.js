import React, { Component } from 'react';
import './Featured_Collection.css';

class Featured_Collection extends Component {

	render() {
		return (
			<div className="featured_products" >
				<div>
					Our products are inspired by the people and world around us. 
					Beautiful, high quality goods that are designed especially for you. 
					Discover our story and meet the people that make our brand what it is. 
				</div>
									Featured Collections
				<div className="featured_products_container">	
					<div class="grid-item">
						  <img className="product_image" src="https://cdn.shopify.com/s/files/1/0535/4197/products/Infamous-DNA-Sicario-PANTS-BALCK_2048x.jpg?v=1570412611" alt="Denim Jeans" />
						  <h1>Men</h1>
						  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
					</div>
					<div class="grid-item">
						  <img className="product_image" src="https://cdn.shopify.com/s/files/1/0535/4197/products/Infamous-DNA-Sicario-PANTS-BALCK_2048x.jpg?v=1570412611" alt="Denim Jeans" />
						  <h1>Women</h1>
						  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
					</div>
					<div class="grid-item">
						  <img className="product_image" src="https://cdn.shopify.com/s/files/1/0535/4197/products/Infamous-DNA-Sicario-PANTS-BALCK_2048x.jpg?v=1570412611" alt="Denim Jeans" />
						  <h1>Kids</h1>
						  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
					</div>
				</div>
			</div>
		)
	}

}

export default Featured_Collection;