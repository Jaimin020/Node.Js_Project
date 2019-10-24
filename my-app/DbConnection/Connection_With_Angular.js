//intialize pakages
var express = require("express");
var body_parser = require("body-parser");
const mongoose = require('mongoose');

//intialize connection
mongoose.connect("mongodb://localhost:27017/ZangDb");
var db = mongoose.connection;

//Database connnection checking
db.on('error', console.log.bind(console, 'connection error'))
db.once('open', function (callback) {
    console.log('connection done');
})

var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
var m;
//Model intialize
var User_details = new mongoose.Schema({
    name: String,
    Password: String,
}, { collection: 'User_details' });
var ud = mongoose.model("ud", User_details);
var Music_details = new mongoose.Schema({
    Music_id: String,
    Name: String,
    File: String,
    Image: String,
    Gener: String,
    Music_count: Number,
    Artist: Object,
    Time_stamp: Date,
    Quility: Number,
    length: Number,
    Type: String
}, { collection: 'Music_details' });
var md = mongoose.model("md", Music_details);

function dbset1(name) {
    console.log("in dbset1" + "+" + name)
    if (name == "User_details") {
        m = ud
    }
    else if (name == "Music_details") {
        m = md
    }
}
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.get("/test", function (req, res) {
    console.log("in get");
    res.end();
})

app.post('/details/:dbn', function (req, res) {
    dbset1(req.params.dbn)
    console.log(m)
    console.log("in function");
    m.find({}, function (err, docs) {
        if (err) throw err;
        console.log(docs);
        res.send(docs);
    })
})
app.post('/login/:dbn', function (req, res) {
    //dbset1(req.params.dbn)
    var o = JSON.parse(JSON.stringify(req.body))
    console.log(o)
    var tem = { check: 'f' }
    ud.find({ name: o.name, Password: o.Password }, function (err, docs) {
        /*console.log(docs[0])
        if(docs[0]._id=='5da5be0aaabcd103b40be58d')
        {
            res.send(tem)
            res.end();
        }*/
        if (docs.length == 0) {
            res.send(tem)
            res.end();
        }
        else {
            tem.check='t';
            res.send(tem)
            res.end();
        }
    })
})
app.post('/insert/:dbn',function(req,res){
    dbset1(req.params.dbn)
    var o = JSON.parse(JSON.stringify(req.body))
    db.collection(req.params.dbn).insertOne(o,function(err)
    {
        if(err) throw err
    })
    res.send();
    res.end();
})
app.post('/id_d/:dbn/:id',function(req,res){
    dbset1(req.params.dbn)
    m.find({_id:req.params.id},function(err,data){
        if(err) throw err
        res.send(data)
    })
})
app.post('/Edito/:dbn/:id',function(req,res){
    dbset1(req.params.dbn)
    var o = JSON.parse(JSON.stringify(req.body))
    m.findOneAndUpdate({_id:req.params.id},o,{upsert:true}, function(err, doc){
        if(err) throw err
        res.send();
    })
})
app.post('/delete_d/:dbn/:id',function(req,res){
    dbset1(req.params.dbn)
    m.remove({_id:req.params.id},function(err){
        if(err) throw err
        res.send();
    })
})
app.post('/findbn/:name',function(req,res){
    ud.find({name:req.params.name},function(err,doc){
        console.log(doc)
        res.send(doc)
    })
})

var schema = mongoose.Schema
var Song_Details = new schema(
    { Music_id:String,
        Name: String,
       
    }
)
var songs = mongoose.model("songs", Song_Details);
console.log(songs.find(function (err,so){
console.log(so);
}));
app.get("/songs", (req, res) => {
    songs.find( function(err, song) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All employees returned");
            res.send(song);
        }
    });
});
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})