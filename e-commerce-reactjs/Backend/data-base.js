const mongoose= require("mongoose");
const {mongodb} = require("./keys");
mongoose.connect(mongodb.URI,{})
   .then(db=> console.log("DataBase is Connected"))
   .catch(err=> console.err(err));