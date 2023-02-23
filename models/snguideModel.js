const mongoose = require('mongoose');

const snguideSchema = new mongoose.Schema({
    series: {
        type: String,
    },
    episode: {
        type: Number,
    },
    license: {
        type: Number,
    },
    platform: {
        type: Number,
    },
    brand: {
        type: Number,
    },
    description: {
        type: Number,
    },
    talent: {
        type: Number,
    },
})

snguideSchema.index({
    series: 'string',
    episode: 'string',
    license: 'string',
    platform: 'string',
    brand: 'string',
    description: 'string',
    talent: 'string',

})

// Mongoose automatically looks for the plural, lowercased version of your model name (1st argument)
const Show = mongoose.model('snguides', snguideSchema);



module.exports = Show;
