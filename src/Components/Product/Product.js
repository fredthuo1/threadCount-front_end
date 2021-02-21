import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"


import WomanDress from '../Images/WomanDress.jpg';
import './Product.css';

const Product = (props)=> {

		const history = useHistory()
		const [product, setProduct] = useState({
			name: '',
			description: '',
			size: '',
			color: '',
			material: '',
			images: [],
			originalPrice: '',
			discountPrice: '',
			quantity: '',
			category: ''
		})


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
								{ product.name }
							</div>
							<div>
								{ product.description }
							</div>
							
							<div>
								{ product.size }
							</div>
							<div>
								{ product.color }
							</div>
							<div>
								{ product.material }
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
						<div>
							<button> Add to Cart </button >
							<input type="number" name="quantity" />
							<button> Add to Favorites</button >
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