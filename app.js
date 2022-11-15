const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const weather = require('./dist/weather.js');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './templates/views'));
hbs.registerPartials(path.join(__dirname, './templates/partials'));


app.get('/', (req, res) => {
    res.render('index', {
        name: 'Haris'
    });
});

app.get('/ask', (req, res) => {
    let city = req.query.city || 'Sarajevo';
    weather.getWeather(city, (err, data) => {
        res.send({
            ...data, city
        });
    });
});



app.listen(3000, () => {
    console.log(`Server is running:${3000} PORT`);
})