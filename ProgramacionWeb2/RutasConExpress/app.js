const express = require('express');
const app = express();
const path = require('path');
const PORT = 3006
const routes = require('./routes/routes')

app.use(express.static('public'));

app.use('/', routes);

app.get('/', (req, res) => {
    /*Redirecciona a una url dada como parámetro desde el
    directorio actual*/
    res.redirect('/inicio');
});

app.listen(PORT, () => {
    console.log(`El servidor está en funcionamiento: http://localhost:${PORT}`);
});