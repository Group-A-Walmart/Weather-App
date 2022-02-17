import clouds from './images/clouds.jpg';
import clear from './images/clear.jpg';
import drizzle from './images/drizzle.jpg';
import rain from './images/rain.jpg';
import snow from './images/snow.jpg';
import thunderstorm from './images/thunderstorm.jpg';

export const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * (9/5) + 32;
}

export const getWeatherPic = (weather) => {
    console.log("weather: " + weather)
    weather = weather.toLowerCase();
    switch(weather) {
        case 'clouds':
            return clouds;
        case 'rain':
            return rain;
        case 'clear':
            return clear;
        case 'drizzle':
            return drizzle;
        case 'snow':
            return snow;
        case 'thunderstorm':
            return thunderstorm;
        default: 
            console.log("test...")
    }
}