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

var schema = mongoose.Schema
var User = new schema(
    {
        User_Name: String,
        Email: String,
        Password: String
    }
)
var Userm = mongoose.model("User_Details", User);
/*var ud={
    User_Name:"Jaimin",
    Email:"Jaimin@mail.com",
    Password:"123"
}

db.collection("'User_Details").insertOne(ud,function(err,collection){
    if(err) throw err;
    console.log("INsert");
})*/
var Song_Details = new schema(
    {
        Music_id: strnig,
        Name: string,
        File: string,
        Image: string,
        Gener: string,
        Music_count: Number,
        Artist: any,
        Time_stamp: Date,
        Quility: Number,
        length: Number,
        Type: string
    }
)
var Userm = mongoose.model("Song_Details", Song_Details);