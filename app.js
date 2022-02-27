const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/userInfo');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(routes);
app.get('/', (req, res)=>{
    res.send("Welcome to your server")
    })



app.use('/professional', routes);

app.listen(8080);