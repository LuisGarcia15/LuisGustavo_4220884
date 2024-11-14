//Importamos el modulo de express
const express = require('express');
//Importamos el modulo de MYSQL para manipular una 
//Base de Datos relacional
const mysql = require('mysql2');
//Importamos el modulo de bodyparser, que permite, dado
//la información en el cuerpo de una petición, parsearlo
//a un formato conocido
const bodyParser = require('body-parser');

/*Generamos la aplicacion de express, pose ahora las capacidades
de levantar un servidor web para manejar peticiones HTTP*/
const app= express();

//Colcoamos un middleware que usara la app de express, en este
//caso bodyParser. Convierte la información de un cuerpo de una
//petición en un objeto de Javascript.
app.use( bodyParser.urlencoded({extended:false}));

//platillas que sean dinamicas
app.set('view engine','ejs');

//creamos la conexion a una base de datos
const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',//usuario de la DB
    password: '1234',//pass de tu DB
    database: 'inicioProyecto',//nombre de la base de datos
    port: 3306//puerto
});

//comprobacion de la conexion de la base de datos
db.connect(err=>{
    if(err){
        console.log(`Erro en la conexion de base de datos BB ${err}`);
    }else {
        console.log(`La base de datos funciona y esta conectada`)    
    }
});

//iniciamos el server a partir de la app de express
const port = 3009;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});
