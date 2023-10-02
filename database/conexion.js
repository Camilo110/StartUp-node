const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/startUp');

const objetobd = mongoose.connection

objetobd.on('connected', ()=> {console.log('sirve BD')})
objetobd.on('error', ()=> {console.log('NO sirve BD')})

module.exports = mongoose