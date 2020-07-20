const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema({
    quotee: {
        type: String,
        trim: true,
        required:true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    dateQuoted: {
        type: Date,
        default: Date.now
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const quote = mongoose.model('Quote', QuotesSchema);
module.exports = quote;