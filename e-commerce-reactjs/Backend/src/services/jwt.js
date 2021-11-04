///en este apartado vamos a escribir la logica para generar nuestros token nuestra contraseña 
//importamos el modulo jwt;
const jwt = require('jwt-simple');
//importamos moment para trabajar con fechas
const moment = require('moment');

//ingresamos la que va hacer nuestra llave secreta
const SECRE_KEY = "kjhghfhgjkjlgfdhghjkdfhghjgfdghjgfhjgdgseertyuiytrew324e5r6t7yuhgtfrde34w5rt6";

//creamos el token y exportamos
exports.createAccesToken = (user)=>{
    const payload={
        id: user._id,
        userName: user.userName,
        createToken: moment().unix(),
        exp:moment().add(360,"minute").unix()
    }
    return jwt.encode(payload, SECRE_KEY)
};
//refrescamos el token

exports.createRefreshToken=(user)=>{
    const payload={
        id:user._id,
        exp: moment().add(24,"hours").unix()
    }
    return jwt.encode(payload,SECRE_KEY)
}

exports.decodedToken = (token)=>{
    return jwt.decode(token,SECRE_KEY,true);
}