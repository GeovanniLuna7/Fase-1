const Shipment = require('../models/shipmentModel');

// Crear un nuevo envío
exports.createShipment = (req, res) => {
    const nuevoEnvio = new Shipment(req.body);

    nuevoEnvio.save()
        .then(envio => res.status(201).json({ message: "Envío registrado exitosamente", envio }))
        .catch(err => res.status(500).json({ message: "Error al registrar el envío", error: err }));
};

// Obtener todos los envíos registrados
exports.getShipments = (req, res) => {
    Shipment.find()
        .then(envios => res.status(200).json(envios))
        .catch(err => res.status(500).json({ message: "Error al obtener los envíos", error: err }));
};
