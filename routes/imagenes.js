var express = require('express');

var app = express();

const path = require('path');
const fs = require('fs');

app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    // var path = `./uploads/${ tipo }/${ img }`;

    var pathImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);

    // fs.exists(path, existe => {

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        var pathNoImage = path.resolve(__dirname, '../assets/no-img.jpg');
        res.sendFile(pathNoImage);
    }

    // });


});

module.exports = app;