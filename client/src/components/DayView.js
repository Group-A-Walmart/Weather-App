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
    const iconcode = props.weatherData.weather[0].icon;
    let iconUrl =  "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
    const favorites = ["Seattle, WA", "Atlanta, GA", "Phoenix, AZ"];



    return (
        <div id="day-view">
           <img className="background-image" src={imageUrl} alt="weather image"/>
           <h1>{newTemp}°</h1>
           <img className="icon" src={iconUrl} alt="current weather icon"/>
           <h2>{name}, {props.state}</h2>
           <div className="details">
               <div className="weather-details">
                    <h3>Current Conditions</h3>
                    <h4>{weatherDescription}</h4>
                    <h4>Feels Like: {feelsLike}°</h4>
                    <h4>Wind: {windSpeed}mph</h4>
                    <h4>Humidity: {humidity}%</h4>
                    <hr></hr>
               </div>
                <div className="favorites">
                    <h3>Favorite Locations</h3>
                    {favorites.map((fav, i) =>
                    <button id={i}>{fav}</button>)}
                </div>
           </div>
        </div>
    )
}

export default DayView;