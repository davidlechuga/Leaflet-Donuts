import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class MapView extends Component {

    state = {
        localStart: {
            lat: 19.4648954,   
            lng: -99.1689384,
            zoom: 10,
        }
    }
    
    

    render() {
    //array vista principal
    const position = [this.state.localStart.lat, this.state.localStart.lng]
        
        
 
    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={this.state.localStart.zoom}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
                
                 
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        
        </Map>
      </div>
    )
  }
}


export default MapView