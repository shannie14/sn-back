const mongoose = require('mongoose');

const FolderSchema = new mongoose.Schema({
    channel: {
        type: String,
    },
    url: {
        type: String,
    }
})

const Folder = mongoose.model('folders', FolderSchema);

module.exports = Folder;