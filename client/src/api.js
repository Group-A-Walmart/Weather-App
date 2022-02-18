import { API_KEY } from "./apiKey";
const axios = require('axios');

let long;
let lat;
let cityName;
let cityState;

export const getLatAndLong = async (city, state) => {
    return await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},&limit=5&appid=${API_KEY}`)
        .then(res => {
            long = res.data[0].lon;
            lat = res.data[0].lat;
            cityName = res.data[0].name;
            cityState = res.data[0].state;
        })
}

export const getWeather = async (city, state) => {
    let parsableCity = city.replace(/ /, "+");
    let coord = await getLatAndLong(parsableCity, state);
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
        .then(res => {
            return res.data
        });
}

export const getWeeklyWeather = async (city, state) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${API_KEY}`)
        .then(res => ({ ...res.data, cityState, cityName }));
}

export const addUser = async (user) => {
    axios.post('http://localhost:8080/users', user);
}