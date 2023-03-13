const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const mongoose = require('mongoose');


//MONGODB CONNECTION
require("./database/connection");

const saleEndpoints = require('./routes/saleRoutes')
const campaignEndpoints = require('./routes/campaignRoutes')
const dzEndpoints = require('./routes/dzRoutes')
const userEndpoints = require('./routes/userRoutes')
const folderEndpoints = require('./routes/folderRoutes')
const snguideEndpoints = require('./routes/snguideRoutes')


//express app
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// // connect to db
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//       
//         app.listen(process.env.PORT, () => (
//             console.log('Welcome to SK server', process.env.PORT)
//         ))
//     })
//     .catch((error) => {
//         console.log(error)
//     })


//endpoints
app.use('/sales', saleEndpoints)
app.use('/campaigns', campaignEndpoints)
app.use('/dropzones', dzEndpoints)
app.use('/users', userEndpoints)
app.use('/snguides', snguideEndpoints)
app.use('/folders', folderEndpoints)

//listen for req
app.listen(process.env.PORT, () => {
    console.log(`Welcome to SK server ${process.env.PORT}`);
});