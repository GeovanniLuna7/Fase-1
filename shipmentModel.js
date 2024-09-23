const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    remitente: {
        nombre: String,
        ciudad: String,
        estado: String,
        domicilio: String,
        codigoPostal: String,
        telefono: String
    },
    destinatario: {
        nombre: String,
        ciudad: String,
        estado: String,
        domicilio: String,
        codigoPostal: String,
        telefono: String
    },
    mercancia: {
        descripcion: String,
        peso: Number,
        largo: Number,
        ancho: Number,
        alto: Number,
        fechaSalida: Date,
        fechaLlegada: Date,
        precio: Number
    }
});

module.exports = mongoose.model('Shipment', shipmentSchema);
