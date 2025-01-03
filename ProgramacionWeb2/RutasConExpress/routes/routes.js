const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public','/views', 'calculadora.html'));
});

routes.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public','/views', 'index.html'));
});

routes.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, '../public','/views', 'qr.html'));
});

module.exports = routes