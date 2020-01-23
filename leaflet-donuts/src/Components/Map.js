import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import DB from '../Lib/data.json'


class MapView extends Component {

    state = {
        localStart: {
            lat: 19.4648954,   
            lng: -99.1689384,
            
        },
        haveUserLocation: false,
        zoom: 10,
        datos: DB.features,
        
    }

    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                localStart: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                haveUserLocation: true,
                zoom:15
            });
        });
    }

    render() {
        const position = [this.state.localStart.lat, this.state.localStart.lng]
        // console.log(this.state.datos);
        
        return (
        // we usea MAP from react-leaflet with some state properties 
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={this.state.zoom}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <GeoJSON       
            {...this.state.datos.map((dato, index) => {
                // console.log(dato.geometry.coordinates, index)
                const coord = [dato.geometry.coordinates[0], dato.geometry.coordinates[1]]
                console.log(coord);
                return (
                    <Marker>
                       
                    </Marker>
                )
            })}
        />        
        
        {this.state.haveUserLocation ?
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            : ''
        }
        
        
        </Map>
            
        )
    }
}


export default MapView