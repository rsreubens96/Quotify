const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://database:nostrat@quotify-quotes.9pswg.mongodb.net/quotes?retryWrites=true&w=majority', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>console.log("We are connected lolcats!"))


module.exports = mongoose;