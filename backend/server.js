const express = require('express');
const app = express();
const Quote = require('./db/models/quote');
const mongoose = require('./db/mongoose');
// const Author = require('./db/models/author');


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

// app.get('/authors', (req, res) => {
//     Author.find({})
//         .then(authors => res.send(authors))
//         .catch((err) => console.log(err));
// });
//
// app.get('/authors/:authorId', (req, res) => {
//     Quote.find({_id: req.params.authorId})
//         .then((author)=>res.send(author))
//         .catch((err) => console.log(err));
// });
//
// app.patch('/authors/:authorId', (req, res) => {
//     Quote.findOneAndUpdate({_id: req.params.authorId}, { $set: req.body })
//         .then((author)=>res.send(author))
//         .catch((err) => console.log(err));
// });
//
// app.delete('/authors/:authorId', (req, res) => {
//     Quote.deleteOne({_id: req.params.authorId})
//         .then((author)=>res.send(author))
//         .catch((err) => console.log(err));
// });
//
// app.post('/authors', (req, res) => {
//     const author = new Author({author:req.body.author});
//     author.save()
//         .then(author => res.send(author))
//         .catch((err) => console.log(err));
// });

app.listen(process.env.PORT || 3000, () => console.log("Server Connected to default PORT"));
