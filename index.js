'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1> Register your credentials please </h1>');
});
app.get('/product', function (req, res) {
    res.send('<h1> Welcome to Shecks Pharma Products page </h1>'); 
});
app.get('/login', function (req, res) {
    res.send('<h2> Login your credentials below </h2>');
});
app.get('/contact', function (req, res) {
    res.send('<h1> Welcome to our contact center </h1>');
});
app.listen(PORT, HOST);
console.log(`Server Running on http://${HOST}:${PORT}`);

