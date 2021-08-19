ctrl = {}

const usuarioService = require("../services/usuarioService")
const RespuestaModel = require("../models/RespuestaModel")

ctrl.crearUsuario = async (req, res) => {

    let respuesta = new RespuestaModel();

    try{
        if(await usuarioService.crearUsuario(req.body)){
            respuesta.mensaje = "Usuario registrado OK"
            respuesta.status = 200
            console.log(req.body)
            
        }else{
            respuesta.mensaje = "Error en el usuario"
            respuesta.status = 400
        }
    }catch (error){
        console.log(error)
        respuesta.mensaje = "Ocurrio un error en el servidro :'("
        respuesta.status = 500
    }

    //res.status(respuesta.status).json(respuesta);
    res.render('index', {
        alert: true,
        alertTitle: "Acceso al MAT",
        alertMessage: "Datos Enviados!!",
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 2500,
        ruta: ''
    })
}

ctrl.listarUsuario = async (req, res) => {

    try {
            let listarUsuario = await usuarioService.listarUsuario()
            res.status(200).json({data: listarUsuario})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: "Algo salio mal, GG"})
    }
}

module.exports = ctrl;