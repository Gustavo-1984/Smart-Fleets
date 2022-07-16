const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    usuario: {
        type: String,
        trim: true,
        unique: true
    },
    contraseña: {
        type: String,
        trim: true
    },
    isActive: Boolean
});

module.exports = mongoose.model('Users', usersSchema);
