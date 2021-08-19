const express = require("express")
const router = express.Router()

const usuario = require("../controllers/usuarioController")
const validarUsuario = require('../validations/validationUsuario')
//const midd = require('../validations/midd')

module.exports = app => {
    /* router.get('/', (req, res) => {
        res.send('GO SERVER')
    
    }) */

    router.get('/', (req, res) => {
        res.render('index')
    
    })

    router.post("/crearUsuario",usuario.crearUsuario)
    router.get("/listarUsuario", usuario.listarUsuario)


    app.use(router)
}