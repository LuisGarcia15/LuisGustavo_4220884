/*requier()
Obtiene modulos de JavaScript con la extensión .js, mientras que
import los obtiene de las extensiones .mjs. Obtiene las definiciones
del modulo de express*/
const express = require('express');
/*Obtine las herramientas del modulo de path*/
const path = require('path');
/*express.Router crea un nuevo objeto Router
Es una mini aplicación enficada en middleware y funciones de routing,
Este objeto actua como middleware en si mismo por por que puede ser
usado como parametro en una función que use middleware*/
const router = express.Router();

/*Métodos HTTP que maneja la ruta del objeto Router de express*/
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/templates', 'index.html')); //Función para get
});

router.get('/formulario', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/templates', 'formulario.html')); //Función para get
});

router.get('/informacion', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/templates', 'informacion.html')); //Función para get
});
/*Exporta modulos en JS*/
module.exports = router;