const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/templates', 'index.html')); // Asegúrate de que la ruta sea correcta
});

router.get('/formulario', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/templates', 'formulario.html')); // Asegúrate de que la ruta sea correcta
});

router.get('/informacion', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/templates', 'informacion.html')); // Asegúrate de que la ruta sea correcta
});


module.exports = router;