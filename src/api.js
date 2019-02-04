const express = require('express');
const app = express();
const port = 3000;

app.get('/blockchain', function (req, res) {
    res.send('Blockchain_info')
  });

app.post('/transaction', function (req, res){
    res.send('Ttansactions')
});

app.get('/mine', function(req, res){
    res.send('mining')
});

app.listen(port, () => console.log(`listening on port ${port} !`));
