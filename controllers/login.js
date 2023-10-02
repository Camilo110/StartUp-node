const bcrypt = require('bcrypt');
const modeloUsuario = require('../model/usuario')

const login = async (req, res) => {
  const { email, contraseña } = req.body
  try {
    const user = await modeloUsuario.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) {
      return res.status(400).send({ error: 'Contraseña incorrecta' });
    }

    return res.send("ok");


  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = login;