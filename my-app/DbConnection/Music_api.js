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
mongoose.connect("mongodb://localhost:27017/Music", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);
var schema = mongoose.Schema
function mongoConnected() {
	var Song_Details = new schema(
        { Music_id:String,
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
        }
    )
    var songs = mongoose.model("Song_Details", Song_Details);
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
				res.send('[    {        "Music_id": "1",        "Name": "Dil Chori",        "File": "./assets/media/01 - Dil Chori - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 20,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "2",        "Name": "Subah Subah",        "File": "./assets/media/02 - Subah Subah - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 22,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "3",        "Name": "Chhote Chhote Peg",        "File": "./assets/media/03 - Chhote Chhote Peg - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 200,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20171206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "4",        "Name": "Bom Diggy Diggy",        "File": "./assets/media/04 - Bom Diggy Diggy - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20180506,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "5",        "Name": "Kaun Nachdi",        "File": "./assets/media/05 - Kaun Nachdi - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20151206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "6",        "Name": "Lakk Mera Hit",        "File": "./assets/media/06 - Lakk Mera Hit - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 420,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20190916,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "7",        "Name": "Tera Yaar Hoon Main",        "File": "./assets/media/07 - Tera Yaar Hoon Main - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/Movie-Review-Sonu-Ke-Titu-Ki-Sweety-Movie.jpg",        "Gener": "rock",        "Music_count": 520,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191116,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "8",        "Name": "All Time Low",        "File": "./assets/media/All Time Low - Jon Bellion (192  kbps) (eMP3z.com).mp3",        "Image": "./assets/images/2d2da75168b8b3ae2b549b32157a568e.1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 320,        "Artist": [            "Jon Bellion"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "9",        "Name": "Animals",        "File": "./assets/media/Animals - Maroon 5.mp3",        "Image": "./assets/images/c05b3c4739a994bca85d932f6d6cb586.1000x1000x1.png",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " Maroon 5"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "10",        "Name": "Believer",        "File": "./assets/media/Believer - Imagine Dragons.mp3",        "Image": "./assets/images/86e0d33ebe09cafa4e686ad0f38dc3df1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Imagine Dragons"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length":3.3,        "Type": "English"    }]');
			}
		});
	});
	
}
app.listen(8000);

