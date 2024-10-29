/*Obtiene las herramientas del modulo de express*/
const express = require("express");
/*express()
crea una aplicación de express. contiene herramientas
para manear peticiones http*/
const app = express();
/*Obtine las herramientas del modulo de router.js*/
const router = require("./router.js");
const port = 3006;
const path = require('path');
app.use(express.static("./"));
// Usa el enrutador con la aplicación Express
//use() Usa el Middleware dado
app.use("/", router);
// Escucha el puerto con Express directamente, es identio a Node.http.listen()
//Se ejecuta cuando se monta un servidor
app.listen(port, () => {
    console.log('Rutas')
    console.log(path.join(__dirname, '/css'));
    console.log(`El servidor está en http://localhost:${port}`);
});