const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


// read params from the request
app.get('/api/geoloc/:address', (req, res) => {
    addr = req.params.address;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCRXFufO-umRtTvZ4i__gKySRhewPLnTMQ`;

    let request = require('request');
    request(url, (error, response, body) => {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        res.send(body);
    }).end(); 
});

app.get('/api/weather/:lat/:long', (req, res) => {
    let lat = req.params.lat;
    let long = req.params.long;
    console.log(lat, long);
    let url = `https://api.darksky.net/forecast/ac728c50d6674e3809266c19b5db99e2/${lat},${long}`;

    let request = require('request');
    request(url, (error, response, body) => {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        res.send(body);
    }).end();
})

app.get('/api/seal/:q', (req, res) => {
    let search_key = req.params.q;
    let url = 'https://www.googleapis.com/customsearch/v1?q='+encodeURIComponent(search_key)+encodeURIComponent('State Seal') + '&cx=008690648113066904464:wijtc5h4fjp&imgSize=huge&imgType=news&num=1&searchType=image&key=AIzaSyCRXFufO-umRtTvZ4i__gKySRhewPLnTMQ';
    let request = require('request');
    request(url, (error, response, body) => {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        res.send(body);
    }).end();
})

app.get('/api/weekly/:lat/:lon/:time', (req, res) => {
    let lat = req.params.lat;
    let long = req.params.lon;
    let time = req.params.time;
    let url = `https://api.darksky.net/forecast/ac728c50d6674e3809266c19b5db99e2/${lat},${long},${time}`;
    let request = require('request');
    request(url, (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode); 
        res.send(body);
    }).end();
})

app.get('/api/auto/:name', (req, res) => {
    let name = req.params.name;
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${name}&types=(cities)&language=en&key=AIzaSyCRXFufO-umRtTvZ4i__gKySRhewPLnTMQ`;
    let request = require('request');
    request(url, (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode); 
        res.send(body);
    }).end();
})
// this is the proper way to create a port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));