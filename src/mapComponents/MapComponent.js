import React from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places", /*key=AIzaSyAaDJBfkGGTtIjSc2uIt5LZiv2HUVbA3qM*/
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}}
    >
        <Marker
            position={{lat: 46.44, lng: 30.74}}
        />
        {props.isMarkerShown && <Marker position={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}}
                                        onClick={props.handleMarkerClick}/>}
    </GoogleMap>
);

export default MapComponent;