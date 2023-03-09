const mongoose = require('mongoose');

const DropzoneSchema = new mongoose.Schema({
    date: {
        type: String,
    },
    units: {
        type: Number,
    },
    sales: {
        type: Number,
    }
})

// DzSchema.index({
//     date: 'text',
//     units: 'number',
//     sales: 'number'
// })

// Mongoose automatically looks for the plural, lowercased version of your model name (1st argument)
const Drop = mongoose.model('dropzones', DropzoneSchema);


module.exports = Drop;
