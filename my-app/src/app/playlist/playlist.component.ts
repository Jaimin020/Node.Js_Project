import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { $ } from 'protractor';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    data = '[    {        "Music_id": "1",        "Name": "Dil Chori",        "File": "./assets/media/01 - Dil Chori - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 20,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "2",        "Name": "Subah Subah",        "File": "./assets/media/02 - Subah Subah - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 22,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "3",        "Name": "Chhote Chhote Peg",        "File": "./assets/media/03 - Chhote Chhote Peg - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 200,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20171206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "4",        "Name": "Bom Diggy Diggy",        "File": "./assets/media/04 - Bom Diggy Diggy - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20180506,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "5",        "Name": "Kaun Nachdi",        "File": "./assets/media/05 - Kaun Nachdi - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20151206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "6",        "Name": "Lakk Mera Hit",        "File": "./assets/media/06 - Lakk Mera Hit - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 420,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20190916,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "7",        "Name": "Tera Yaar Hoon Main",        "File": "./assets/media/07 - Tera Yaar Hoon Main - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/Movie-Review-Sonu-Ke-Titu-Ki-Sweety-Movie.jpg",        "Gener": "rock",        "Music_count": 520,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191116,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "8",        "Name": "All Time Low",        "File": "./assets/media/All Time Low - Jon Bellion (192  kbps) (eMP3z.com).mp3",        "Image": "./assets/images/2d2da75168b8b3ae2b549b32157a568e.1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 320,        "Artist": [            "Jon Bellion"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "9",        "Name": "Animals",        "File": "./assets/media/Animals - Maroon 5.mp3",        "Image": "./assets/images/c05b3c4739a994bca85d932f6d6cb586.1000x1000x1.png",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " Maroon 5"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "10",        "Name": "Believer",        "File": "./assets/media/Believer - Imagine Dragons.mp3",        "Image": "./assets/images/86e0d33ebe09cafa4e686ad0f38dc3df1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Imagine Dragons"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length":3.3,        "Type": "English"    }]';
    playlist = JSON.parse(this.data);

  i=0;
  nowimg=this.playlist[this.i].Image;
  nowp= this.playlist[this.i].File;
  src_playing=" <source id='playing' src="+this.nowp+" type='audio/mpeg'>";
  audio:any =new Audio();
  


  constructor() { this.audio.src=this.nowp;}
  nextp(event) {
 
    
    this.i=(this.i+1)%10;
    this.nowp=this.playlist[this.i].File;
    this.audio.src=this.nowp;
    this.audio.load();
    this.audio.play();
 
    
    this.nowimg=this.playlist[this.i].Image;
    this.src_playing =" <source id='playing' src='"+this.nowp+"' type='audio/mpeg'>";
 
    console.log(this.nowp);
 }
pausp(event) {

  this.audio.pause();
  console.log(this.nowp);
}

playp(event) {

  this.audio.play();
  console.log(this.nowp);
}
 previousp(event) {

    this.i=(this.i-1)%10;
    this.nowp=this.playlist[this.i].File;
    this.nowimg=this.playlist[this.i].Image;
    this.audio.src=this.nowp;
    this.audio.load();
    this.audio.play();
    this.src_playing ="<source id='playing' src="+this.nowp+" type='audio/mpeg'>";
    console.log(this.nowp);
}
removesong(index)
{
  this.playlist.splice(index, 1);
}
  ngOnInit() {
  }
}
