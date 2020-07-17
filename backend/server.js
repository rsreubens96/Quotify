
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Quote = require('./db/models/quote');

//  Connection URL
const url = 'mongodb://admin:$[password]@localhost:3000/quotify-quotes?authSource=https://cloud.mongodb.com/v2/5f1109eab5dc041e9afe0500#clusters/detail/quotify-quotes';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    client.close();
  });



app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requted-With, Content-Type, Accept');
    next();
});

app.get('/quotes', (req, res) => {
    Quote.find({})
        .then(quotes => res.send(quotes))
        .catch((err) => console.log(err));
});

app.get('/quotes/:quoteId', (req, res) => {
    Quote.find({_id: req.params.quoteId})
        .then((quote)=>res.send(quote))
        .catch((err) => console.log(err));
});

app.patch('/quotes/:quoteId', (req, res) => {
    Quote.findOneAndUpdate({_id: req.params.quoteId}, { $set: req.body })
        .then((quote)=>res.send(quote))
        .catch((err) => console.log(err));
});

app.delete('/quotes/:quoteId', (req, res) => {
    Quote.deleteOne({_id: req.params.quoteId})
        .then((quote)=>res.send(quote))
        .catch((err) => console.log(err));
});

app.post('/quotes', (req, res) => {
    const quote = new Quote({quotee:req.body.quotee, body:req.body.body, dateQuoted:new Date(req.body.dateQuoted)});
    quote.save()
        .then(quote => res.send(quote))
        .catch((err) => console.log(err));
});

app.listen(process.env.PORT || 3000, () => console.log("Server Connected to default PORT")); 
