const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.post('/transaction', function (req, res){
//     res.send(`The transaction amount ${req.body.amount} will transfer to ${req.body.reciever} `);
// });
 
var jsonParser = bodyParser.json();
app.post('/transaction', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send(`The transaction amount ${req.body.amount} will transfer to ${req.body.receiver} `);
});


app.get('/blockchain', function (req, res) {
    
});



app.get('/mine', function(req, res){
    
});

app.listen(port, () => console.log(`listening on port ${port} !`));
