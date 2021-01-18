import React, { Component } from 'react';
import BestSellers from './BestSellers';
import HotDeals from './HotDeals';
import './DealsBestSellers.css';

class DealsBestSellers extends Component {

	render() {
		return (
			<div class="dealsBestSellers">
				<div class="hotDeals">
					<HotDeals />
				</div>
				<div class="bestSellers">
					<BestSellers />
				</div>
			</div>
		)
	}

}

export default DealsBestSellers;