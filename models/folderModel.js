const mongoose = require('mongoose');

const FolderSchema = new mongoose.Schema({
    channel: String,
    url: String
})

const Folder = mongoose.model('folders', FolderSchema);

module.exports = Folder;