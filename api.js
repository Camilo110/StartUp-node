const express = require('express')
const app = express()

const conexionBD = require("./conexion")

const rutas = require('./rutas')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api', rutas)

app.get('/', (req,res)=>{
    res.end("esto es un get de la api")
})

app.listen(5000, function(){
    console.log("servidor OK")
})