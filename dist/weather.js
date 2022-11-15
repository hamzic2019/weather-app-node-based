const hbs = require('hbs');
const express = require('express');
const app = express();
const request = require('postman-request');


const getWeather = (city, callback) => {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c5a16cc206494e67207a0cfdcb6db03e `
    request(api, (err, res, body) => {
        let tempData = JSON.parse(res.body);

        let description = tempData.weather[0].description;
        let exact = tempData.weather[0].main;
        let icon = tempData.weather[0].icon
        let temp = tempData.main.temp;
        let wind = tempData.wind.speed;
        let humidity = tempData.main.humidity;
        let clouds = tempData.clouds.all;

        let data = {description, icon, temp, wind, humidity, clouds, exact}

        callback(undefined, data);
    });
}


module.exports = {getWeather}