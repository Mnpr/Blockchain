const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const app = express();
const port = 3000;
const blockchain1 = new Blockchain();

app.use(bodyParser.urlencoded({ extended: false }));
// var urlEncoded = bodyParser.urlencoded({extended: false}); 

var jsonParser = bodyParser.json();
app.post('/transaction', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  const blockIndex = blockchain1.createNewTransaction(req.body.amount, req.body.sender, req.body.receiver);
  res.json({note: `the transaction is added in block ${blockIndex}`});
});


app.get('/blockchain', function (req, res) {
    res.send(blockchain1);
});



app.get('/mine', function(req, res){
    
});

app.listen(port, () => console.log(`listening on port ${port} !`));
