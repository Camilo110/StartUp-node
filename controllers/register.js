const bcrypt = require('bcrypt');

const modeloUsuario = require('../model/usuario')

const register = async (req, res) => {
    const { nombre, email, apellido, contraseña } = req.body;

    const existingUser = await modeloUsuario.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Si el usuario no existe, hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

     // Convertir firstname y lastname a la primera letra mayúscula y el resto en minúsculas
     const formattedFirstname = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
     const formattedLastname = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
 
     // Convertir el email a minúsculas
     const formattedEmail = email.toLowerCase();
 
     const nuevoUsuario = new modeloUsuario({
         nombre:formattedFirstname,
         email: formattedEmail,
         apellido:formattedLastname,
         contraseña:hashedPassword
     })
    nuevoUsuario.save()
        .then(() => {
            res.send("Agregado")
        })
        .catch(err => {
            res.status(500).send(err);
        });
  }

module.exports = register