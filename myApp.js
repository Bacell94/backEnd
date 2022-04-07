var express = require('express');
var app = express();


console.log("Hello World")
app.get('/', (seq,res)=> res.sendFile(__dirname + "/views/index.html" ))
app.get('/', (req,res)=> {res.send('Hello Express')})
































 module.exports = app;
