const usuario = require("../model/usuario");

const getUserById = async (req, res)=> {
    const {userId} = req.params;
    usuario.findById(userId).then((usuario) => {
        if(!usuario){
            res.send(userId)
        }else{
            const{_id, contraseña, __v, ...resto} = usuario._doc
            res.send(resto)
        }
    })
    
}
module.exports = getUserById;