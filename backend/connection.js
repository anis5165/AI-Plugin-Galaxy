const mongoose = require('mongoose');

const url = "mongodb+srv://anis5165:Vikas2002@cluster0.y3opu.mongodb.net/AI-Plugin-Galaxy?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)

    .then((result) => {
       console.log("Connect to the database") 
    }).catch((err) => {
        console.log(err)
    });

module.exports = mongoose;

