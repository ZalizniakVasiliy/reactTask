import React, {Component} from 'react';
import {compose, withStateHandlers} from "recompose";
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from 'react-google-maps';


const Map = compose(
    withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null
    }), {
        onMapClick: ({isMarkerShown}) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown: true
        })
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 46.44, lng: 30.74}}
        onClick={props.onMapClick}
    >
        {props.isMarkerShown && <Marker position={props.markerPosition}/>}

    </GoogleMap>
)

export default class CreatingMarker extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `400px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        )
    }
}