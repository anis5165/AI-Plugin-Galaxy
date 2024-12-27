const {Schema, model} = require('../connection');
const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password : String
});
module.exports = model('user' , userSchema);