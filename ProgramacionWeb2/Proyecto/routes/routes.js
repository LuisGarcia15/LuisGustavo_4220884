const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get('/agregar', (req, res) => {
    res.render('insert');
});

module.exports = routes