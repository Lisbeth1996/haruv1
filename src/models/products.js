
module.exports = function (){
    var db = require('../libs/db-conection')();
    var mongoose = require('mongoose');  // Not require('mongoose').Schema (because you need schema and model)

    var products = mongoose.Schema({
        Codigo: String,
        Nombre: String,
        Cantidad: Number,
        Tipo: String,
        FechaVencimiento: Date,
        FechaCompra : Date,
        Precio: Number,
        Estado: Boolean,
        Lote: Number,
        FechaCreacion: Date
    });

    return mongoose.model('product', products);
}