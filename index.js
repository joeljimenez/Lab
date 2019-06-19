'use strict'
const path = require('path');
const bodyP = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Enabling JSON bodyParser
app.use(bodyP());

// Archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('menu.pug');
});


app.listen(port, () => {
    console.log(`La aplicación esta ejecutando en el puerto:  ${port}!`);
});