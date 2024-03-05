const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema({

    nombre: String,
    experiencia: [String],
    habilidades: [String],

},
    {
        timestamp: true, // TODO createdAt, updatedAt
        versionKey: false
    }
);

const Perfil = mongoose.model('Perfil', perfilSchema);

module.exports = Perfil;
