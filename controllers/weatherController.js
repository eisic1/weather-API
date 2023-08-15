const axios = require('axios');
const config = require('../config');

const BASE_URL = config.openWeatherMap.current_url;
const SECRET_KEY = config.openWeatherMap.secret_key;
const FORECAST_URL = config.openWeatherMap.forecast_url;

const getCurrentWeather = (req, res) => {
    const url = `${BASE_URL}${req.body.city}&appid=${SECRET_KEY}`;
    axios.get(url).then(response => {
        console.log('Response', response.data);
        res.send(response.data)
    }).catch(error => {
        console.log('Error', error)
    })
}

const getForecastWeather = (req, res) => {
    const obj = {
        params: {
            q: req.body.city,
            appid: SECRET_KEY,
            units: 'metric'
        }
    }
    axios.get(FORECAST_URL, obj).then(response => {
        console.log('Response', response);
        res.send(response.data)
    }).catch(error => {
        console.log('Error', error);
    })
}

const getHistoryWeather = (req, res) => {
    
}


module.exports = {
    getCurrentWeather,
    getForecastWeather,
    getHistoryWeather
}