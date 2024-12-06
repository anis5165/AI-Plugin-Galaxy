const {Schema, model} = require('../connection');
const extensionSchema = new Schema({
    extensionName: String,
    details: String,
});
module.exports = model('extension' , extensionSchema);