// src/controllers/weatherController.js
const axios = require('axios');

const getWeather = async (req, res) => {
    try {
        const city = req.query.city || 'London';
        const apiKey = 'c80bac3b875472b203dfa000db0a9432'; 
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c80bac3b875472b203dfa000db0a9432`);
        const weatherData = response.data;
        res.render('weather', { weather: weatherData });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Error retrieving weather data' });
    }
};

module.exports = { getWeather };
