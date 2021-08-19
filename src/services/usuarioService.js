const usuarioService = {}
var mongoose = require('mongoose')
const Usuario = require("../models/Usuario")
//const validarUsuario = require("../validations/validationUsuario")

usuarioService.crearUsuario = async (crearUsuarioModel) => {

   // const validar = validarUsuario.crearUsuarioValidacion(crearUsuarioModel);

   // console.log(validar);

  //  if(validar){
        const newUsuario = new Usuario({

            tipoDocumento: crearUsuarioModel.tipoDocumento,
            numDocumento: crearUsuarioModel.numDocumento,
            nombres: crearUsuarioModel.nombres,
            apellidoPat: crearUsuarioModel.apellidoPat,
            apellidoMat: crearUsuarioModel.apellidoMat,
            sexo: crearUsuarioModel.sexo,
            codAlumno: crearUsuarioModel.codAlumno,
            facultad: crearUsuarioModel.facultad,
            situacion: crearUsuarioModel.situacion,
            correoPersonal: crearUsuarioModel.correoPersonal,
            correoIns: crearUsuarioModel.correoIns
        })
    
        await newUsuario.save()
        return true;
   // }else{
       // return false;
   // }
}

usuarioService.listarUsuario = async () => {
    return await Usuario.find({})
}

module.exports = usuarioService;