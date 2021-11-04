//framework nodejs para trabajar con el protocolo HTTP
const express=require("express");
const mongoose = require("mongoose");
const router =require("./src/routes");
const bodyParser = require("body-parser");

//importamos las variables d eentorno locales como  de datos 
require("dotenv").config({path:"variable.env"});
//creamos el servidor
const app = express();


//conexion con mogoose.
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/e-commerce-reacjs',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser:true,
})
 //habilitar el body parser,
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}))


 //para cargar imagenes
 app.use("/public", express.static(`${__dirname}/storage/imgs`))

//para que express pueda entender los formatos JSON

app.use(`/api`,router());

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4001;
const v = process.env.API_VERSION;

//escucha rne el puerto

app.listen(port, ()=>{
    console.log(`http://${host}:${port}/api/`);
    console.log("servidor corriendo correctamente")
})