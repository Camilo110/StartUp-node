const express = require('express')
const app = express()

const conexionBD = require("./conexion")

app.listen(5000, function(){
    console.log("servidor OK")
})

app.get('/', (req,res)=>{
    res.end("esto es un get de la api")
})
