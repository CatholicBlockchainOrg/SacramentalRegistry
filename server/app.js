'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

let sacramentalRecords = [];
let primaryKey = 1; 

app.get('/sacramental-records', (req, res) => {
  console.log('received get request for ' + req.url)
  res.send(sacramentalRecords, 201);
})

app.post('/sacramental-records', (req, res) => {
  const sacramentalRecord = req.body;
  sacramentalRecord.id = primaryKey++;
  sacramentalRecords.push(sacramentalRecord);
  res.send(sacramentalRecord, 201);
})

app.listen(3000);

module.exports = app; // for testing