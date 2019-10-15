//intialize pakages
var express = require("express");
var body_parser = require("body-parser");
const mongoose = require('mongoose');

//intialize connection
mongoose.connect("mongodb://localhost:27017/Music");
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
    Password: String
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
    dbset1(req.params.dbn)
    var o = JSON.parse(JSON.stringify(req.body))
    console.log(o.name + o.pass)
    var tem = { check: 'f' }
    m.find({ name: o.name, Password: o.pass }, function (err, docs) {
        console.log(docs[0]._id)
        if(docs[0]._id=='5da5be0aaabcd103b40be58d')
        {
            res.send(tem)
            res.end();
        }
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
    db.collection('User_details').insertOne({ name: o.name, Password: o.pass },function(err)
    {
        if(err) throw err
    })
    res.send();
    res.end();
})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})