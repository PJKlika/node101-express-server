// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const path = require('path');


const topSpots = require('./data.json')

const staticPath = path.join(__dirname, '..', '..', 'web102-san-diego-top-spots');




// create your express server below
const app = express();




// add your routes and middleware below
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(express.static(staticPath));

app.get('/data', (req, res) => {
    res.status(200).json(topSpots);
})
app.get('/ping', (req, res) => {
    res.status(200).send('pong');
});
app.post('/echo', (req, res) =>{
    res.status(200).json({ youSent: req.body});
});


// finally export the express application
module.exports = app;
