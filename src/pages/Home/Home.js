import React, { Component } from 'react';

import Carousels from '../../Components/Carousel/Carousels';
import Featured_Collection from '../../Components/Featured_Collections/Featured_Collection';
import Sections from '../../Components/Sections/Sections';
import DealsBestSellers from '../../Components/DealsBestSellers/DealsBestSellers';

import { Button } from 'react-bootstrap';
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