const express = require('express')
const app = express()

const conexionBD = require("./database/conexion")

const rutas = require('./rutas')

//const controllers = require('./controllers')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api', rutas)

app.get('/', (req,res) => {
    res.send("hola")
})

app.listen(5000, function(){
    console.log("servidor OK")
})