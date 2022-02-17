import React from 'react';
import '../styles/DayView.css';
import {kelvinToFahrenheit, getWeatherPic} from '../helpers';

const DayView = (props) => {
    const main = props.weatherData.main;
    const name = props.weatherData.name;
    const temp = main.temp;
    const newTemp = Math.trunc(kelvinToFahrenheit(temp));
    const weather = props.weatherData.weather[0].main;
    let weatherDescription = props.weatherData.weather[0].description;
    weatherDescription = weatherDescription.split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
    console.log(weather);
    const imageUrl = getWeatherPic(weather);
    const feelsLike = Math.trunc(kelvinToFahrenheit(props.weatherData.main.feels_like));
    const humidity = props.weatherData.main.humidity;
    const windSpeed = Math.round(props.weatherData.wind.speed);



    return (
        <div className="day-view">
           <img src={imageUrl} alt="weather image"/>
           <h1>{newTemp}°</h1>
           <h2>{name}, {props.state}</h2>
           <div className="details">
                <h3>{weatherDescription}</h3>
                <h3>Feels Like: {feelsLike}°</h3>
                <h3>Wind: {windSpeed}mph</h3>
                <h3>Humidity: {humidity}%</h3>
           </div>
        </div>
    )
}

export default DayView;