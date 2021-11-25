'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaArtistas = Schema({
    nombre: String,
    descripción: String,
    Imagen: String
});

module.exports = mongoose.model('Artistas', EsquemaArtistas);