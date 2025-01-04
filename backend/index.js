const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');


const UserRouter = require('./routers/user')
const ContactRouter = require('./routers/contact')
const ExtensionRouter = require('./routers/extension')
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3001']
}))
app.use('/user',UserRouter)
app.use('/contact',ContactRouter)
app.use('/extension',ExtensionRouter)



app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})