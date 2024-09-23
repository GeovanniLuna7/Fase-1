const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Mid
app.use(express.json()); // Para recibir JSON en el body

// Modelo solo se pone el (Ejemplo de un esquema de Mongoose para "Envios")
const envioSchema = new mongoose.Schema({
    nombreRemitente: String,
    ciudadRemitente: String,
    estadoRemitente: String,
    domicilioRemitente: String,
    codigoPostalRemitente: String,
    telefonoRemitente: String,
    nombreDestinatario: String,
    ciudadDestinatario: String,
    estadoDestinatario: String,
    domicilioDestinatario: String,
    codigoPostalDestinatario: String,
    telefonoDestinatario: String,
    descripcion: String,
    peso: String,
    largo: String,
    ancho: String,
    alto: String,
    fechaSalida: String,
    fechaLlegada: String,
    precio: String
});

const Envio = mongoose.model('Envio', envioSchema);

// Ruta POST para registrar un envío
app.post('/api/registro', async (req, res) => {
    try {
        const envio = new Envio(req.body);
        await envio.save();
        res.status(201).send('Envío registrado correctamente');
    } catch (error) {
        res.status(400).send('Error registrando el envío');
    }
});

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/envios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a MongoDB");
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
