import React from 'react';
import clouds from '../images/clouds.jpg';
import '../styles/DayView.css';
import kelvinToFahrenheit from '../helpers';


const DayView = (props) => {
    const main = props.weatherData.main;
    const name = props.weatherData.name;
    const temp = main.temp;
    console.log(temp);

    return (
        <div className="day-view">
           <img src={clouds} alt="weather image"/>
           <h1>72°</h1>
           <h2>{name}, {props.state}</h2>
        </div>
    )
}

export default DayView;