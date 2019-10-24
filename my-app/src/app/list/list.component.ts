import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../music-service.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 data = '[    {        "Music_id": "1",        "Name": "Dil Chori",        "File": "./assets/media/01 - Dil Chori - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 20,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "2",        "Name": "Subah Subah",        "File": "./assets/media/02 - Subah Subah - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 22,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "3",        "Name": "Chhote Chhote Peg",        "File": "./assets/media/03 - Chhote Chhote Peg - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 200,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20171206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "4",        "Name": "Bom Diggy Diggy",        "File": "./assets/media/04 - Bom Diggy Diggy - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20180506,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "5",        "Name": "Kaun Nachdi",        "File": "./assets/media/05 - Kaun Nachdi - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20151206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "6",        "Name": "Lakk Mera Hit",        "File": "./assets/media/06 - Lakk Mera Hit - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 420,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20190916,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "7",        "Name": "Tera Yaar Hoon Main",        "File": "./assets/media/07 - Tera Yaar Hoon Main - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/Movie-Review-Sonu-Ke-Titu-Ki-Sweety-Movie.jpg",        "Gener": "rock",        "Music_count": 520,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191116,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "8",        "Name": "All Time Low",        "File": "./assets/media/All Time Low - Jon Bellion (192  kbps) (eMP3z.com).mp3",        "Image": "./assets/images/2d2da75168b8b3ae2b549b32157a568e.1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 320,        "Artist": [            "Jon Bellion"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "9",        "Name": "Animals",        "File": "./assets/media/Animals - Maroon 5.mp3",        "Image": "./assets/images/c05b3c4739a994bca85d932f6d6cb586.1000x1000x1.png",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " Maroon 5"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "10",        "Name": "Believer",        "File": "./assets/media/Believer - Imagine Dragons.mp3",        "Image": "./assets/images/86e0d33ebe09cafa4e686ad0f38dc3df1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Imagine Dragons"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length":3.3,        "Type": "English"    }]';
  musiclist;// = JSON.parse(this.data);
  charts:string;
  private sharedData;
  constructor( sharedData:SharedDataService,private route: ActivatedRoute,private dbcontext:MusicServiceService) { 
this.sharedData=sharedData;
  }
  playall(){
    var i=this.sharedData.nowPi;
    this.musiclist.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
    i++;
     });
     this.musiclist.reverse();
     this.sharedData.length= this.sharedData.length+this.musiclist.length;
     this.sharedData.nowPi=i-1;
     console.log(this.sharedData.sharedplaylist)
     this.sharedData.callMethodOfSecondComponent("load"); 
  }
  playsong(song,icon){
    console.log(icon.src);
    if(icon.src.includes("play"))
    {
      //this.sharedData.sharedplaylist[this.sharedData.length]=song;
      if(song.Music_id!=this.sharedData.sharedplaylist[this.sharedData.nowPi].Music_id){
        this.sharedData.sharedplaylist.splice(this.sharedData.nowPi, 0, song);
        this.sharedData.length= this.sharedData.length+1;
        this.sharedData.nowPi=this.sharedData.nowPi;
        this.sharedData.callMethodOfSecondComponent("load"); 
        
      }else{
        this.sharedData.callMethodOfSecondComponent("play");
      }
      icon.src="../../assets/resources/pause-white6.png";

    }else if(icon.src.includes("pause")){
      this.sharedData.callMethodOfSecondComponent("pause");
      icon.src="../../assets/resources/play-white.png";
    }
    
    

  }
  ngOnInit() {


    console.log(this.sharedData.sharedplaylist);
    document.body.scrollTop=0;
    this.charts = this.route.snapshot.paramMap.get('chart');
    this.musiclist=new Array();
    if(this.charts.includes("International")){
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(e.Type=="English")
          {
            this.musiclist.push(e);
          }
        });
      });
    }else if(this.charts.includes("Bollywood")){
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(e.Type=="Hindi")
          {
            this.musiclist.push(e);
          }
        });
      });

    }else if(this.charts.includes("Hollywood")){

      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(e.Type=="English") 
          {
            this.musiclist.push(e);
          }
        });
      });

    }else if(this.charts.includes("Today's")){
      var i=0;
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          i++;
          if(i<=10) 
          {
            this.musiclist.push(e);
          }
        });
      });

    }else if(this.charts.includes("Zang" )||this.charts.includes("Daily" )){
      var i=1;
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(i<=10 && e.Music_count>200) 
          {
             i++;
            this.musiclist.push(e);
          }
        });
      });

    }else if(this.charts.includes("US's")){
      var i=1;
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(i<=10 && e.Music_count>200 && e.Type=="English"  ) 
          {
             i++;
            this.musiclist.push(e);
          }
        });
      });
      

    }else if(this.charts.includes("New Releases")){
      var i=1;
      this.dbcontext.getMusic().subscribe(x=>{
       x.sort(function(a,b){
          return a.Time_stamp >b.Time_stamp?1:a.Time_stamp <b.Time_stamp?-1:0
         }
         );
        x.forEach(e => {
          if( i<=10) 
          {
             i++;
            this.musiclist.push(e);
          }
        });
      });
    }

    
  }

}
