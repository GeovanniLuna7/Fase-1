const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Ruta para crear un envío
router.post('/', formController.createShipment);

// Ruta para obtener todos los envíos
router.get('/', formController.getShipments);

module.exports = router;
