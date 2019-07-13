import React from 'react';

import classes from './list.css'

const list = (props) =>{
    return(
        <div>
            <ul>
                <li>City : {props.city},{props.country}</li>
                <li>Temparature :{props.temp}</li>
                <li>Humidity :{props.humidity}</li>
                <li>Description :{props.description}</li>
                <li>Wind Speed :{props.windSpeed}</li>
            </ul>
        </div>
    );
}

export default list ;