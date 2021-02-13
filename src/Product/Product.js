import React, { useState, useEffect } from 'react';
import StarRating from 'react-bootstrap-star-rating';
import WomanDress from '../images/WomanDress.jpg';

import './Product.css';

const Product = ({count, value, 
		inactiveColor='#ddd',
		size=24,
		activeColor='#f00', onChange})=> {

		const [products, setProducts] = useState([]);
	
		const stars = Array.from({length: count}, () => '🟊')

		const handleChange = (value) => {
			onChange(value + 1);
		}

		return (
			<div>
			<div className="product">
				<div className="header">
					Shop Home / Shop / Product Details
				</div>
				<div className="flex-container"> 
					<div className="flex-item-left">
						<div className="photo">
							<img className="product-image" src={WomanDress} alt="WomanDress" />
						</div>
						<div className="photo-galary">
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
						</div>
					</div>
					<div className="flex-item-middle">
						<div className="text_description">
							<div>
								Faxon Canvas Low-Top Sneaker
								Inspired Slim Ankle Leg Jean
							</div>
							<div>
								$90.00
							</div>
							
							<div>
								SKU: 0014
							</div>
							<div>
								VENDOR: Geek
							</div>
							<div>
								AVAILABILITY: In Stock
							</div>
							<div>
								SIZE: S M X XL XS
							</div>
							<div>
								COLOR: 
							</div>
							<div>
								MATERIAL: Cotton, Wool, Silk
							</div>
							<div>	
								<div className="quantity">
									Quantity
								</div>
								<div className="cart">
									Add to cart
								</div>
							</div>
							<div>
								BUY IT NOW
							</div>
							<div>
								CATEGORY: Men, Blazer
							</div>
							<div>
								TAG: Men, Blazer, Casual, Elegant
							</div>
						</div>
					</div>
					<div className="flex-item-right">
					</div>
				</div>
			</div>
			<div className="product-addition-discription"> 
				Product Description | Additional Information | Shipping | Why Buy From Us
			</div>
			<div className="related-products"> 
				Related Products
			</div>
			<div className="viewPage">
				View Page
			</div>
			</div>
		)

}

export default Product;