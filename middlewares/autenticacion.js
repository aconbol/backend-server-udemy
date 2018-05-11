var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;



// ====================================
// Autenticacion del token de Usuario
// ====================================

exports.verificaToken = function(req, res, next) {

    var token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Error de autenticación de usuario',
                errors: err
            });
        }

        req.usuario = decoded.usuario;

        next();
    });

}