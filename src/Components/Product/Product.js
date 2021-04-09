import React, { useState, useEffect } from 'react';
import { GrFavorite } from 'react-icons/gr';
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
						<div className="photo-gallary">
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
							<img className="product-gallery" src={WomanDress} alt="WomanDress" />
						</div>
					</div>
					<div className="flex-item-middle">
						<div className="text_description">
							<div className="product-name">
								{ product.name } Name Placeholder
							</div>
							<div className="product-description">
								{ product.description } Description Placeholder
							</div>
							
							<div className="product-size">
								{ product.size } SIZE: S M X XL XS
							</div>
							<div className="product-color">
								{ product.color } Color Placeholder
							</div>
							<div className="product-material">
								{ product.material } Material Placeholder
							</div>
							<div className="product-price">
								$34
							</div>
							<div className="more-product-description">
								More Description
							</div>
							<div className="category">
								CATEGORY: Men, Blazer
							</div>
							<div className="tags">
								TAG: Men, Blazer, Casual, Elegant
							</div>
							<div className="quantity">
								<input type="number" className="quantity-input" defaultValue="0" />
							</div>
						</div>
						<div className="buttons">
							<div className="button-row">
							<button className="add-to-cart"> Add to Cart </button >	
							<GrFavorite className="add-to-favorites" />
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