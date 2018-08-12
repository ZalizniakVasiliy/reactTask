import React, {Component} from 'react';
import MapComponent from './MapComponent';

class MyMapComponentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocation: {lat: 46.44, lng: 30.74},
            isMarkerShown: false,
        }
    };

    componentWillUpdate() {
        this.getGeoLocation()
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.getGeoLocation();
            this.setState({isMarkerShown: true})
        }, 1500)
    };

    handleMarkerClick = () => {
        this.setState({isMarkerShown: false});
        this.delayedShowMarker()
    };

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(prevState => ({
                        ...prevState.currentLocation,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }))
                })
        }
    };

    render() {
        return (
            <MapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                currentLocation={this.state.userLocation}
            />
        )
    }
}

export default MyMapComponentView;