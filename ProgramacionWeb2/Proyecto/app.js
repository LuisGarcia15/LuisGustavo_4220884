const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./conexion');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', './views');

//const hostname= '192.168.3.115';
const port = 3009;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

app.get('/', (req, res) => {
    const query = 'SELECT * FROM alumnos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { alumnos : results});
        }
    });
});

app.post('/add', (req, res) => {
    const {nombres, apellidoPaterno, apellidoMaterno, numeroCuenta, numeroCelular, correoElectronico} = req.body;
    const query = 'INSERT INTO alumnos (nombres_fmr, apellido_paterno_fmr, apellido_materno_fmr, numero_cuenta_fmr, numero_celular_fmr, correo_electronico_fmr) VALUES (?,?,?,?,?,?)';
    db.query(query, [nombres, apellidoPaterno, apellidoMaterno, numeroCuenta, numeroCelular, correoElectronico], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/delete/:id_fmr', (req, res) => {
    const { id_fmr } = req.params;
    const query = 'DELETE FROM alumnos WHERE id_fmr = ?';
    db.query(query, [id_fmr], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/edit/:id_fmr', (req, res) => {
    const { id_fmr } = req.params;
    const query = 'SELECT * FROM alumnos WHERE id_fmr = ?';
    db.query(query, [id_fmr], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('update', { alumno: results[0] });
        }
    });
});

app.post('/update', (req, res) => {
    const {id, nombres, apellidoPaterno, apellidoMaterno, numeroCuenta, numeroCelular, correoElectronico, valido} = req.body;
    const query = 
    'UPDATE alumnos SET nombres_fmr = ?, apellido_paterno_fmr = ?, apellido_materno_fmr = ?, numero_cuenta_fmr = ?, numero_celular_fmr = ?, correo_electronico_fmr = ?, alumno_activo_fmr = ? WHERE id_fmr = ?';
    values = [nombres, apellidoPaterno, apellidoMaterno, numeroCuenta, numeroCelular, correoElectronico, valido, id];
    db.query(query, [nombres, apellidoPaterno, apellidoMaterno, numeroCuenta, numeroCelular, correoElectronico, valido, id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {

            res.redirect('/');
        }
    });
});
