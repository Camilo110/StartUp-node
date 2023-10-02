const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaUsuario = new eschema({
    nombre:{type: String, require: true},
    email:{type: String, require: true, unique: true},
    apellido: {type: String, require: true},
    contraseña: {type: String, require: true},
})
const modeloUsuario = mongoose.model('usuariosLog', eschemaUsuario)

module.exports = modeloUsuario;