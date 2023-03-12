const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const saleEndpoints = require('./routes/saleRoutes')
const campaignEndpoints = require('./routes/campaignRoutes')
const dzEndpoints = require('./routes/dzRoutes')
const userEndpoints = require('./routes/userRoutes')
const folderEndpoints = require('./routes/folderRoutes')
const snguideEndpoints = require('./routes/snguideRoutes')


//express app
const app = express()

//middleware
app.use(cors({
    origin: ['https://willowy-taffy-d4f8e5.netlify.app', 'http://localhost:3000', 'http://localhost:3001', 'https://nbtv.pro/']
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for req
        app.listen(process.env.PORT, () => (
            console.log('Welcome to SK server', process.env.PORT)
        ))
    })
    .catch((error) => {
        console.log(error)
    })

//endpoints
app.use('/sales', saleEndpoints)
app.use('/campaigns', campaignEndpoints)
app.use('/dropzones', dzEndpoints)
app.use('/users', userEndpoints)
app.use('/snguides', snguideEndpoints)
app.use('/folders', folderEndpoints)



