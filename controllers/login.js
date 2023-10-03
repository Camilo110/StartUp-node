const bcrypt = require('bcrypt');
const modeloUsuario = require('../model/usuario')

const login = async (req, res) => {
  const {email, contraseña} = req.body
  try {
    const user = await modeloUsuario.findOne({email});

    if (!user) {
      return res.send("Usuario no encontrado" );
    }

    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) {
      return res.send("Contraseña incorrecta");
    }

    return res.send("ok");


  } catch (error) {
    return res.send("Ocurrio Un Error");
  }
}
module.exports = login;