const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://database:nostrat@quotify-quotes.9pswg.mongodb.net/quotes?retryWrites=true&w=majority',
     {useNewUrlParser: true})
     .then(() => console.log("Database is connected"))
     .catch((error) => console.log(error));

module.exports = mongoose;

