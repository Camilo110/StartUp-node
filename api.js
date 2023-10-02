const express = require('express')
const app = express()

const conexionBD = require("./database/conexion")
const controllers = require('./controllers/index')

app.use(express.json())
app.use(express.urlencoded({extended: 'true'}))

app.listen(5000, function(){  console.log("servidor OK")})


app.get('/', (req,res)=>{res.end("esto es un get de la api")})

app.post('/login', controllers.login);
app.post('/adduser', controllers.register);
app.get('/buscar/:userId', controllers.getUserById)
