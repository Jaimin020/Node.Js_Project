//intialize pakages
var express = require("express");
var body_parser = require("body-parser");
const mongoose = require('mongoose');

//intialize connection
mongoose.connect("mongodb://localhost:27017/Music", { useNewUrlParser: true });
var db = mongoose.connection;

//Database connnection checking
db.on('error', console.log.bind(console, 'connection error'))
db.once('open', function (callback) {
    console.log('connection done');
})

app=express();
