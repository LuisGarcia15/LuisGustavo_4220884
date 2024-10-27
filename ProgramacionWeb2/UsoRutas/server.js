const express = require("express");
const app = express();
const router = require("./router");
const port = 3006;

// Usa el enrutador con la aplicación Express
//Usa el Middleware
app.use("/", router);

// Escucha el puerto con Express directamente
app.listen(port, () => {
    console.log(`El servidor está en http://localhost:${port}`);
});