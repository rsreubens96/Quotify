const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required:true
    }
});

const author = mongoose.model('Author', AuthorSchema);

module.exports = author;
