const express = require('express');
const router = express.Router();

const { 
    getCurrentWeather,
    getForecastWeather,
    getHistoryWeather
} = require('../controllers/weatherController');

router.route('/current').get(getCurrentWeather);
router.route('/forecast').get(getForecastWeather);
router.route('/history').get(getHistoryWeather);

module.exports = router