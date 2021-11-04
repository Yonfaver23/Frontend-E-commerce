const multer = require('multer');
 

//el sitio en donde se van ha almacenar nuestras imagenes
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./src/storage/imgs")
    },

//el nobre que va a tener nuestro archivo img para que gle nombre no se repita
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload= multer({storage})
module.exports = upload