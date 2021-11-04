const express = require('express');
const router= express.Router();
const  user = require("../controller/user");
const product= require("../controller/product");
const upload = require("../services/storage");

module.exports = function (){
  //registrar el nuevo usuario
router.post("/singup", user.getSingUp);

//inicio de session unica de usuario con token singIn
router.post("/singIn", user.singIn)

//agregar productos nuevos
router.post("/product",upload.single("imgUrl"),product.addProducts)
  return router;
}
