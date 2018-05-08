// Requires - conjunto de librerias que utilizamos para ejecutar una tarea
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();


// Establecer connexión a MongoDB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de Datos MongoDB: \x1b[32m%s\x1b[0m', ' onLine!!!');
});


// Rutas 
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});



// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 300: \x1b[32m%s\x1b[0m', ' onLine!!!');
});