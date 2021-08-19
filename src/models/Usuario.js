const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({

    tipoDocumento: String,
    numDocumento: String,
    nombres: String,
    apellidoPat: String,
    apellidoMat: String,
    sexo: String,
    codAlumno: String,
    facultad: String,
    situacion: String,
    correoPersonal: String,
    correoIns: String,
    accesoEspecial: {
        type: String,
        default: ''
    },
    clave: {
        type: String,
        default: ''
    },
    estado: {
        type: String,
        default: 'No leído'
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);
