const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//ou require('dotenv/config')

const app = express();
const PORT = 3000;


const uriMongoConnection = process.env.MONGODB_DATABASE_CONNECTION
mongoose.connect(uriMongoConnection, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (err)=>console.log(err))
db.once('open', ()=> console.log('Database Mongodb connection sucessfully!'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`))