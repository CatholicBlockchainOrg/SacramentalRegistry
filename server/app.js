let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: true}))

let sacramentalRecords = [];
let primaryKey = 1; 

app.get('/sacramental-records', (req, res) => {
  res.send(sacramentalRecords, 201);
})

app.post('/sacramental-records', (req, res) => {
  let sacramentalRecord = req.body;
  sacramentalRecord.id = primaryKey++;
  sacramentalRecords.push(sacramentalRecord);
  res.send(sacramentalRecord, 201);
})

app.listen(3000);
