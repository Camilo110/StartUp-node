const express = require('express')
const router = express.Router()

const controllers = require('./controllers')

const modeloUsuario  = require("./model/usuario");

module.exports = router

router.post('/login',async (req, res) => {
    const user = req.body.email
    const pass = req.body.contraseña
    try {
        const users = await modeloUsuario.find({ email: user});
        
        if(users.length > 0){
            res.send(users);
        }else{
            res.status(500).send(err);
        }

      } catch (err) {
        res.status(500).send(err);
      }
  });
  router.post('/adduser',async (req, res) => {
    const nuevoUsuario = new modeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        apellido: req.body.apellido,
        contraseña: req.body.contraseña
    })
    nuevoUsuario.save()
        .then(() => {
            res.send("Agregado")
        })
        .catch(err => {
            res.status(500).send(err);
        });
  });

router.get('/buscar/:userId', controllers.getUserById)
