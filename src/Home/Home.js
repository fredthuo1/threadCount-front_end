import React, { Component } from 'react';
import Carousels from '../Carousel/Carousels';
import Featured_Products from '../Featured_Products/Featured_Products';
import Featured_Collections from '../Featured_Collections/Featured_Collection';
import Newsletter from '../Newsletter/Newsletter';
import './Home.css';

class Home extends Component {

	render() {
		return (
			<div className="home">
				<Carousels className="carousel"/>
				<div className="row"> 
					<div className="column left">
					</div>
					<div className="column middle">
					</div>
					<div className="column right">
					</div>
				</div>
				<Featured_Collections className="Featured_Products"/>
				<Featured_Products className="Featured_Products"/>
				<Newsletter />
			</div>
		)
	}

}

export default Home;
// <Featured_Products />
// <Latest_Blogs />
// <Newsletter />
// <Footer />