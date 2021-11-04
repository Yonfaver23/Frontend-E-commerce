const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema= Schema({
    marca:{
        type:String,
      
    },
    imgUrl:String,
    nombre:{
        type: String,
        unique: true
   
    },
    description:{
        type: String,
      
    },
    precio:{
        type:Number,
    
    }
    
})

//la ruta que nos va a decir donde esta esta imagen en mi Base de datos
productSchema.methods.setImgUrl = function setImgUrl(filename){
    console.log("estoy aca");
    const host =  "http://localhost";
      const port =4001;
     this.imgUrl = `${host}:${port}/public/${filename}`;
    console.log(this.imgUrl);
  
}
module.exports = mongoose.model("Product", productSchema)