import React, { Component } from 'react';
import Carousels from './components/Carousel/Carousels';
import Featured_Products from './components/Featured_Products/Featured_Products';
import Featured_Collection from './components/Featured_Collections/Featured_Collection';
import { Button } from 'react-bootstrap';
import Newsletter from './components/Newsletter/Newsletter';
import Sections from './components/Sections/Sections';
import DealsBestSellers from './components/DealsBestSellers/DealsBestSellers';
import './Home.css';

class Home extends Component {

	render() {
		return (
			<div className="home">
				<Carousels className="carousel"/>
				<div class="flex-container">
					  <div class="flex-item-1">
						<div className="number_one_text">
							<h3>Hotest Designs</h3>
						</div>
						<div className="number_one_button">
							<Button variant="ff4500">Shop now</Button>
						</div>
					  </div>

					  <div class="flex-item-2">
						<div className="number_two_text">
							<h3>Thread Count Hoodie</h3>
						</div>
						<div className="number_two_button">
							<Button variant="ff4500">Shop now</Button>
						</div>
					  </div>
					  <div class="flex-item-3">
						<div className="number_two_text">
							<h3>Thread Count T‑shirts</h3>
						</div>
						<div className="number_two_button">
							<Button variant="ff4500">Shop now</Button>
						</div>
					  </div>
				</div>
				<Featured_Collection className="Featured_Collections"/>
				<Sections />
				<DealsBestSellers />
			</div>
		)
	}

}

export default Home;
// <Featured_Products />
// <Latest_Blogs />
// <Newsletter />
// <Footer />