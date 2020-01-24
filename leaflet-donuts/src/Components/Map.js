import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import DB from '../Lib/data.json'


class MapView extends Component {

    state = {

        coords: [
        { lat: 19.421660401938375, lng: -99.15693014860153, name:'a' },
        { lat: 19.41530343472, lng: -99.15715277194977, name:'b' },
        { lat: 19.42919079699207, lng: -99.16147649288176, name:'c' },
        { lat: 19.41145574246444, lng: -99.15510088205338, name:'d' },
        { lat: 19.406661810457003, lng: -99.166738986969, name:'e' },
        { lat: 19.402872100875346, lng: -99.15420234203339, name:'f' },
        { lat: 19.43371847817348,  lng: -99.13861334323882, name:'g' },
        { lat: 19.425267547722687, lng: -99.17520672082901, name:'h' },
        { lat: 19.434340708291575, lng: -99.14331793785095, name:'i'},
        { lat: 19.430976590230028, lng: -99.13299947977066, name:'j' },
        { lat: 19.434199062620618, lng: -99.1830575466156, name:'k'},
        { lat: 19.4408360413073,   lng: -99.20722424983978, name:'l'},
        { lat: 19.471710610838137, lng: -99.119553565979, name:'m'},
        { lat: 19.45487802240015, lng: -99.2188811302185, name:'n'},
        { lat: 19.439283053079183, lng: -99.20185983181, name:'ñ'},
        { lat: 19.486296091491727, lng: -99.13129091262817, name:'o'},
        { lat: 19.417873571581808, lng: -99.10564363002777, name:'p'},
        { lat: 19.443168025040652, lng: -99.15314018726349, name:'q'},
        { lat: 19.429461449637476, lng: -99.20584827661514, name:'r'},

      ],


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
                 
        return (
        // we usea MAP from react-leaflet with some state properties 
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={this.state.zoom}
        >
          
        <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* <GeoJSON
            {...this.state.datos.map((dato, index) => {
                // console.log(dato.geometry.coordinates, index)
                const positions1 = dato.geometry.coordinates
                console.log(positions1);
                return (
                <Marker position={positions1[index]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                )
            })}
        /> */}
                

        {/* {this.state.positions.coords.map(({ lat, lng }, index) => (
        console.log(`lng:${lat}`,`lat:${lng}`)        
          <Marker position={[lat, lng]}  key={index}>
              <Popup>
                {index + 1} is for popup with lat: {lat} and lon {lng}
              </Popup>
          </Marker>
        ))} */}

                
        {this.state.coords.map(({ lat, lng, name }, index) => (
      <Marker position={[lat, lng, name]}  key={index}>
          <Popup>
            {index + 1} is for popup with lat: {lat} and lon {lng} name {name}
          </Popup>
      </Marker>
    ))}
            
        
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