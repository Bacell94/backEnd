require('dotenv').config()
var express = require('express');
const req = require('express/lib/request');
const { json } = require('express/lib/response');
var app = express();


console.log("Hello World")
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.path} ${req.ip}`)
    next()
    })
app.get('/', (req,res)=> res.sendFile(__dirname + "/views/index.html" ))
app.get('/json', (req,res)=> {
    let msg= {"message" : "Hello json"}
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        msg.message = "HELLO JSON"
    }
    return res.json(msg)
    })
app.use('/public' ,express.static(__dirname + "/public"))
// app.get('/', (req,res)=> {res.send('Hello Express')})
































 module.exports = app;
