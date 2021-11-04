const User= require("../models/user")
const bcrypt = require("bcrypt-nodejs");
const moment = require("moment");
const jwt = require("../services/jwt")
 //registrar nuevo usuario
 exports.getSingUp = (req,res) =>{
      //recivimos los datos que fueron enviados por el metodo post
      const user = new User(req.body);
      console.log(req.headers)
      password=user.password;
      userName=user.userName;
      repeatPassword= req.body.repeatPassword;
      if(!password || !repeatPassword){
          res.status(404).json({message:"las contraseñas son obligatorias."})
      }else{
          if(password !== repeatPassword){
              res.status(404).json({message:"las contraseñas no coinciden."})
          }else{
              //vamos a encriptar nuestro password
           bcrypt.hash(password, null,null, function(err,hash){
               if(err){
                   res.status(500).json({message:"error al encriptar la contraseña"})
               }else{
                   user.password=hash;
                   user.userName= userName;
                   user.fechaCreate=moment();
                   user.save((err, userStored)=>{
                       if(err){
                           res.status(500).json({message:"El usuario ya Existe"})
                       }else{
                           if(!userStored){
                               res.status(404).json({message:"Error al guardar usuario"})

                           }else{
                               res.status(200).json({message:"Usuario guardado exitosamente."})
                           }
                       }
                   })
               }
           })
          }
        }}


        ///inicio de session unico y valido por token

        exports.singIn = (req,res)=>{
            const params = req.body;
            const userName= params.userName;
            const password = params.password;
            User.findOne({userName},(err, userStored)=>{
                if(err){
                    res.status(500).json({message:"Error del servidor."})
                }else{
                    if(!userStored){
                        res.status(404).json({message:"Usuario no Encontrado"})

                    }else{
                        bcrypt.compare(password,userStored.password, (err, check)=>{
                            if(err){
                                res.status(500).json({message:"Error en el servidor"})
                            }else if(!check){
                                res.status(404).json({message:"la contraseña es incorrecta"})
                            }else{
                                res.status(200).json({
                                    code:200,
                                    user: userStored._id,
                                    accessToken:jwt.createAccesToken(userStored),
                                    refreshToken: jwt.createRefreshToken(userStored)
                                })
                            }
                        })
                    }
                }
            })
        }