const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const connectDB = require('./config/connectMongo');
connectDB();

const chatRoutes = require('./routes/chat');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/chat', chatRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`Runing in port http://localhost:${PORT}`))