// Requires - conjunto de librerias que utilizamos para ejecutar una tarea
var express = require('express');

var app = express();


app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

module.exports = app;