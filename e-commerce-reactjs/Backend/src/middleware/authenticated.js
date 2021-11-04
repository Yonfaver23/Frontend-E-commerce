const jwt= require("jwt-simple");
const moment = require("moment");

const SECRE_KEY = "jhgfdyut6543e4rtyrdtfguhy6t5r467yt6r5tyhgyhuyghuygtfhjnbgvtre345678976543213456789i";

//con esta funcion comprobamos si la entrada tiene cabezera de autentificacion

exports.ensureAuth=(req,res,next) => {
    if(!res.headers.authorization){
        return res.status(403).json({message: "la peticion no tiene cabezera de autentificacion"});

    }
    const  token = req.headers.authorization.replace(/['"]+/g, "");
    try{
        var payload = jwt.decode(token,SECRE_KEY);
        if(payload.exp <= moment.unix()){
            return res.status(404).json({message: "Su session ha Expirado"})
        }
    }catch(ex){
       return res.status(404).json({message: "Sessio Invalida."})
    }
    req.user = payload;
    next();

}