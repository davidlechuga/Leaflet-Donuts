import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import DB from '../Lib/data.json';

class MapView extends Component {
	state = {
		coords: [
			{
				lat: 19.421660401938375,
				lng: -99.15693014860153,
				name: 'Calle de Durango 50 Bis, C. U. Benito Juárez, Cuauhtémoc, 06700 Ciudad de México, CDMX'
			},
			{
				lat: 19.41530343472,
				lng: -99.15715277194977,
				name: 'Calle Querétaro 62, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX'
			},
			{
				lat: 19.42919079699207,
				lng: -99.16147649288176,
				name: 'Av. Paseo de la Reforma 208, Juárez, Cuauhtémoc, 06600 Cuauhtémoc, CDMX'
			},
			{
				lat: 19.41145574246444,
				lng: -99.15510088205338,
				name: 'Calle Antonio M. Anza 20, C. U. Benito Juárez, Cuauhtémoc, 06100 Ciudad de México, CDMX'
			},
			{
				lat: 19.406661810457003,
				lng: -99.166738986969,
				name: 'Tlacotalpan 59, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX'
			},
			{
				lat: 19.402872100875346,
				lng: -99.15420234203339,
				name:
					'Av Francisco I. Madero 23, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX'
			},
			{
				lat: 19.43371847817348,
				lng: -99.13861334323882,
				name: 'Av. Cuauhtémoc 462, Piedad Narvarte, Benito Juárez, 03000 Ciudad de México, CDMX'
			},
			{
				lat: 19.425267547722687,
				lng: -99.17520672082901,
				name: 'Calle Río Elba 31, Cuauhtémoc, 06500 Ciudad de México, CDMX'
			},
			{
				lat: 19.434340708291575,
				lng: -99.14331793785095,
				name: 'Calle Río Elba 31, Cuauhtémoc, 06500 Ciudad de México, CDMX'
			},
			{
				lat: 19.430976590230028,
				lng: -99.13299947977066,
				name: 'Av. Juárez 32, Colonia Centro, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX'
			},
			{
				lat: 19.434199062620618,
				lng: -99.1830575466156,
				name:
					'Calle de Venustiano Carranza 92, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06060 Ciudad de México, CDMX'
			},
			{
				lat: 19.4408360413073,
				lng: -99.20722424983978,
				name:
					'Calz. Gral. Mariano Escobedo 425, Polanco, Polanco V Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX'
			},
			{
				lat: 19.471710610838137,
				lng: -99.119553565979,
				name: 'Av. Universidad 936, Sta Cruz Atoyac, Benito Juárez, 03310 Ciudad de México, CDMX'
			},
			{
				lat: 19.45487802240015,
				lng: -99.2188811302185,
				name: 'Dakota 95, Nápoles, Benito Juárez, 03810 Ciudad de México, CDMX'
			},
			{
				lat: 19.439283053079183,
				lng: -99.20185983181,
				name: 'San Francisco 1621 20, Col del Valle Sur, Benito Juárez, 03100 Ciudad de México, CDMX'
			},
			{
				lat: 19.486296091491727,
				lng: -99.13129091262817,
				name:
					'Blvd. Miguel de Cervantes Saavedra 397, Col. Irrigación, Miguel Hidalgo, 11500 Ciudad de México, CDMX'
			},
			{
				lat: 19.417873571581808,
				lng: -99.10564363002777,
				name:
					'Av de los Insurgentes Sur 1310, Tlacoquemecatl del Valle, Benito Juárez, 03100 Ciudad de México, CDMX'
			},
			{
				lat: 19.443168025040652,
				lng: -99.15314018726349,
				name: 'Blvd. Adolfo López Mateos 1701, Lomas de Plateros, Álvaro Obregón, 01480 Ciudad de México, CDMX'
			},
			{
				lat: 19.429461449637476,
				lng: -99.20584827661514,
				name: 'Av. Universidad 1052, Xoco, Benito Juárez, 03330 Ciudad de México, CDMX'
			}
		],

		localStart: {
			lat: 19.4648954,
			lng: -99.1689384
		},
		haveUserLocation: false,
		zoom: 10,
		datos: DB.features
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				localStart: {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				},
				haveUserLocation: true,
				zoom: 15
			});
		});
	}

	render() {
		const position = [ this.state.localStart.lat, this.state.localStart.lng ];

		return (
			// we usea MAP from react-leaflet with some state properties
			<Map style={{ height: '100vh' }} center={position} zoom={this.state.zoom}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
					attribution="&copy; Openstreetmap France | &copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>

				{this.state.coords.map(({ lat, lng, name }, index) => (
					<Marker position={[ lat, lng, name ]} key={index}>
						<Popup>
							{index + 1} is for popup with lat: {lat} and lon {lng} name {name}
						</Popup>
					</Marker>
				))}

				{this.state.haveUserLocation ? (
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				) : (
					''
				)}
			</Map>
		);
	}
}

export default MapView;
