const yup = require('yup');

module.exports = {

    crearUsuario: yup.object().shape({
        tipoDocumento: yup.string().min(3).matches(/^[A-Za-z0-9]+$/).required(),
        numDocumento: yup.string().min(8).matches(/^[A-Za-z0-9]+$/).required(),
        nombres: yup.string().min(2).matches(/^[A-Za-z0-9]+$/).required(),
        apellidoPat: yup.string().min(3).matches(/^[A-Za-z0-9]+$/).required(),
        apellidoMat: yup.string().min(3).matches(/^[A-Za-z0-9]+$/).required(),
        sexo: yup.string().min(4).matches(/^[A-Za-z0-9]+$/).required(),
        codAlumno: yup.string().min(4).matches(/^[A-Za-z0-9]+$/).required(),
        facultad: yup.string().min(10).matches(/^[A-Za-z0-9\s]+$/).required(),
        situacion: yup.string().min(5).matches(/^[A-Za-z0-9]+$/).required(),
        correoIns: yup.string().matches(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/)
    })

    //schema.validateSync(data);
}
