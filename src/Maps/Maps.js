import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '100%'
};

class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "React",
			YOUR_LATITUDE: '',
			YOUR_LONGITUDE: ''
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(function(position) {

			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
			this.setState({
				YOUR_LATITUDE: position.coords.latitude,
				YOUR_LONGITUDE: position.coords.longitude
			})
		},
		function(error) {
			console.error("Error code = " + error.code + " - " + error.message);
		});
	}

	 componentDidMount() {
		if (navigator.geolocation) {
		  navigator.geolocation.watchPosition(function(position) {
			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
		  });
		}
	}

	render() {
		return (
			<div>
				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: this.state.YOUR_LATITUDE,
						lng: this.state.YOUR_LONGITUDE
					}}
				>
				<Marker
					onClick={this.onMarkerClick}
					name={"This is test name"}
				/>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAYsjUjvMOu9CF_xNvjo6vBi6ZJxHGqMKQ'
})(Maps);