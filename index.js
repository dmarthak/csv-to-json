'use strict';

const express = require("express"),
  app = express(),
  upload = require("express-fileupload"),
  csvtojson = require("csvtojson");

let csvData = "test";
app.use(upload());

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + '/file-upload.html');
});

app.post("/upload", (req, res) => {
  csvData = req.files.csvfile.data.toString('utf8');
  return csvtojson().fromString(csvData).then(json => res.status(201).json({json}))
});

app.listen(4000, function(){
  console.log('Your node js server is running on port 4000');
}); 