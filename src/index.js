import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
//import App from './App';
//import MapComponent from './mapComponents/MyMapComponentView';
import CreatingMarker from './mapComponents/CreatingMarker';

ReactDOM.render(
    <BrowserRouter>
        {/*<App/>*/}
        {/*<MapComponent/>*/}
        <CreatingMarker/>
    </BrowserRouter>,
    document.getElementById('root')
);