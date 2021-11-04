const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        unique: true

},
    password: String,
    fechaCreate: Date,
})


module.exports = mongoose.model("user", userSchema);