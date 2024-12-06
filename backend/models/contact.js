const {Schema, model} = require('../connection');
const contactSchema = new Schema({
    fName: String,
    lName: String,
    email: String,
    details: String
});
module.exports = model('contact',contactSchema);