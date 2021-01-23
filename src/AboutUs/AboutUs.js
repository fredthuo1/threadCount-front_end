import React, { Component } from 'react';
import ThreadCountBanner from '../images/ThreadCount Banner-1.png';
import './AboutUs.css';

class AboutUs extends Component {

	render() {
		return (
			<div className="aboutUs">
				<div> 
					<img
					  className="logo_image"
					  src={ThreadCountBanner}
					  alt="Top Banner"
					/>
				</div>

				<div className="text"> 
					<h3>
						ThreadCount provides a convenient plate form 
					</h3>
					<h3>
						for fashin lovers 
					</h3>
					<h3>
						to connect with each other, 
					</h3>
					<h3>
						whether they are here to
					</h3>
					<h3>
						buy, sell, 
					</h3>	
					<h3>
						learn or teach!
					</h3>
				</div>
			</div>
		)
	}

}

export default AboutUs;