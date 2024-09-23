const express = require('express');
const router = express.Router();
const Envio = require('../models/Envio');

// Crear un nuevo envío
router.post('/envios', (req, res) => {
  const nuevoEnvio = new Envio(req.body);
  nuevoEnvio.save().then(() => res.status(201).send(nuevoEnvio));
});

// Leer envíos
router.get('/envios', (req, res) => {
  Envio.find().then(envios => res.status(200).send(envios));
});

module.exports = router;
