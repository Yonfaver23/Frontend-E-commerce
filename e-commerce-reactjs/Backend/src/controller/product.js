const Products = require("../models/product");
const moment = require("moment");
const path = require("path");

// marca
// name
// description
// precio


exports.addProducts = async (req,res) =>{
    try {

    //primero unimos lo que viene por mi req.body con mi models
    const product = new Products(req.body);
         //ami campo producto.imgUrl le pasamos el metodo que esta en products y le pasamos como que
    //parametro lo que viene en mi req.file todo esto para asignarle el nombre
    
    marca = product.marca;
    precio = product.precio;
    description = product.description;
    nombre = product.nombre;
      //traigo el nombre que le delegue en el middleware para pasarlselo al modelo
    const {filename} = req.file;
  //busco el metodo en el podelo para pasarle el nombre y guardar imgUrl en la ruta donde esta
  //guardado
    imgUrl = product.setImgUrl(filename);
    
    
    console.log(product);
   
    

    const productStored = await product.save();
    if(!productStored){
      res.status(500).json({message:"Error al guardar el producto"})
    }else{
    res.status(200).send({productStored})
    // 
    }
  
    // if(!marca){
    //     res.status(404).json({message:"todos los campos son obligatorios"})
    //     }else{
    //         product.save((err , userStored)=>{
    //             if(err){
    //                 res.status(404).json({message:"Este producto ya esta agregado"})
    //             }else{
    //                 if(!userStored){
    //                     res.status(500).json({message:"Error al guardar Product"})
 
    //                 }
    //                 if(userStored){
    //                     res.status(200).json({message:"Producto Guardado Correctamente"})
    //                      producto.save();
    //                 }
    //             }
    //         });
    //     mQ
    

   
  
    

    }catch(e){
        res.status(500).json({message: e})
    }

}