const axios = require('axios');

export const API_KEY = '8d82379ea4c7f79c928129f715fd5e78';

export const getWeather = async (city) => {
    let long;
    let lat;
    let weatherObj = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`)
    .then(res => {
        console.log(res)
        long = res.data[0].lon;
        lat = res.data[0].lat;
    })

    let weatherInfo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
    .then(res => {
        console.log(res);
    })
}