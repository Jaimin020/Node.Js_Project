var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ZangDb", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);
var schema = mongoose.Schema
function mongoConnected() {
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
	
}
app.listen(8000);

