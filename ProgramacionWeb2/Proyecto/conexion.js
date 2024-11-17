const mysql = require('mysql2');

//crear la conexion
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'luis', // tu usuario de MySQL
    password: '1234', // tu contraseña de MySQL
    database: 'web',
    port: 3306
});


//comprobacion de la conexion de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

module.exports = db;