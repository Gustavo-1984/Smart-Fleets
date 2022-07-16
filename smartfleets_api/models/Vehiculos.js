const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vehiculosSchema = new Schema({
    rfid: {
        type: String,
        trim: true,
        unique: true
    },
    placas: {
        type: String,
        trim: true
    },
    modelo: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    numeroEconomico: {
        type: String,
        trim: true
    },
    odometro: {
        type: Number,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    isActive: Boolean
});

module.exports = mongoose.model('Vehiculos', vehiculosSchema);
