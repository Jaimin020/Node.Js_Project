import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
 data = '[    {        "Music_id": "1",        "Name": "Dil Chori",        "File": "./assets/media/01 - Dil Chori - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 20,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "2",        "Name": "Subah Subah",        "File": "./assets/media/02 - Subah Subah - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 22,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "3",        "Name": "Chhote Chhote Peg",        "File": "./assets/media/03 - Chhote Chhote Peg - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 200,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20171206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "4",        "Name": "Bom Diggy Diggy",        "File": "./assets/media/04 - Bom Diggy Diggy - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20180506,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "5",        "Name": "Kaun Nachdi",        "File": "./assets/media/05 - Kaun Nachdi - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20151206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "6",        "Name": "Lakk Mera Hit",        "File": "./assets/media/06 - Lakk Mera Hit - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 420,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20190916,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "7",        "Name": "Tera Yaar Hoon Main",        "File": "./assets/media/07 - Tera Yaar Hoon Main - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/Movie-Review-Sonu-Ke-Titu-Ki-Sweety-Movie.jpg",        "Gener": "rock",        "Music_count": 520,        "Artist": [            "artist1",            "artist2"        ],        "Time_stamp": 20191116,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "8",        "Name": "All Time Low",        "File": "./assets/media/All Time Low - Jon Bellion (192  kbps) (eMP3z.com).mp3",        "Image": "./assets/images/2d2da75168b8b3ae2b549b32157a568e.1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 320,        "Artist": [            "Jon Bellion"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "9",        "Name": "Animals",        "File": "./assets/media/Animals - Maroon 5.mp3",        "Image": "./assets/images/c05b3c4739a994bca85d932f6d6cb586.1000x1000x1.png",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " Maroon 5"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length":2.3,        "Type": "English"    },    {        "Music_id": "10",        "Name": "Believer",        "File": "./assets/media/Believer - Imagine Dragons.mp3",        "Image": "./assets/images/86e0d33ebe09cafa4e686ad0f38dc3df1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Imagine Dragons"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length":3.3,        "Type": "English"    }]';
  musiclist = JSON.parse(this.data);
  charts:string="Top Charts";
  public arr=new Array();
  constructor(public sharedData:SharedDataService,
    public dbcontext:MusicServiceService,
    private route: ActivatedRoute,private router: Router) { 


  }
  public chartsList=[{Name:"Hollywood Top 10",Image:"./assets/resources/Group 5.svg"},{Name:"Today's Top 10",Image:"./assets/resources/Group 8.svg"},{Name:"Bollywood Top 10",Image:"./assets/resources/Group 6.svg"},{Name:"International Top 10",Image:"./assets/resources/Group 4.svg"},{Name:"US's Top 10",Image:"./assets/resources/Group 7.svg"},{Name:"New Realeases",Image:"./assets/resources/Group 9.svg"},{Name:"Zang Originals",Image:"./assets/resources/Group 10.svg"}];
  
  ngOnInit() {
    document.body.scrollTop=0;
  
}
topCharts(chart){
  console.log(chart);
  
  this.router.navigate(['/list', chart.Name]);
}
addchart(chart){
  console.log(chart);
  console.log(this.sharedData.sharedplaylist);

    if(chart.Name.includes("International")){
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(e.Type=="English")
          {
            this.arr.push(e);
          }
        });
        console.log(this.arr);
        i=this.sharedData.nowPi;
        this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
        i++;
         });
    
         this.sharedData.length= this.sharedData.length+this.arr.length;
         this.sharedData.nowPi=i-1;
         console.log(this.sharedData.sharedplaylist)
         this.sharedData.callMethodOfSecondComponent("load"); 
      });
    }else if(chart.Name.includes("Bollywood")){
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(e.Type=="Hindi")
          {
            this.arr.push(e);
          }
        });
        console.log(this.arr);
        i=this.sharedData.nowPi;
        this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
        i++;
         });
    
         this.sharedData.length= this.sharedData.length+this.arr.length;
         this.sharedData.nowPi=i-1;
         console.log(this.sharedData.sharedplaylist)
         this.sharedData.callMethodOfSecondComponent("load"); 
      });

    }else if(chart.Name.includes("Hollywood")){

      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(e.Type=="English") 
          {
            this.arr.push(e);
          }
        });
        console.log(this.arr);
        i=this.sharedData.nowPi;
        this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
        i++;
         });
    
         this.sharedData.length= this.sharedData.length+this.arr.length;
         this.sharedData.nowPi=i-1;
         console.log(this.sharedData.sharedplaylist)
         this.sharedData.callMethodOfSecondComponent("load"); 
      });

    }else if(chart.Name.includes("Today's")){
      var i=0;
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          i++;
          if(i<=10) 
          {
            this.arr.push(e);
          }
        });
        console.log(this.arr);
        i=this.sharedData.nowPi;
        this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
        i++;
         });
    
         this.sharedData.length= this.sharedData.length+this.arr.length;
         this.sharedData.nowPi=i-1;
         console.log(this.sharedData.sharedplaylist)
         this.sharedData.callMethodOfSecondComponent("load"); 
      });

    }else if(chart.Name.includes("Zang")){
      var i=1;
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(i<=10 && e.Music_count>200) 
          {
             i++;
            this.arr.push(e);
          }
        });
        console.log(this.arr);
        i=this.sharedData.nowPi;
        this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
        i++;
         });
    
         this.sharedData.length= this.sharedData.length+this.arr.length;
         this.sharedData.nowPi=i-1;
         console.log(this.sharedData.sharedplaylist)
         this.sharedData.callMethodOfSecondComponent("load"); 
      });

    }else if(chart.Name.includes("US's")){
      var i=1;
      this.dbcontext.getMusic().subscribe(x=>{
        x.forEach(e => {
          if(i<=10 && e.Music_count>200 && e.Type=="English"  ) 
          {
             i++;
            this.arr.push(e);
          }
        });
        console.log(this.arr);
        i=this.sharedData.nowPi;
        this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
        i++;
         });
    
         this.sharedData.length= this.sharedData.length+this.arr.length;
         this.sharedData.nowPi=i-1;
         console.log(this.sharedData.sharedplaylist)
         this.sharedData.callMethodOfSecondComponent("load"); 
      });
      

    }else if(chart.Name.includes("New Releases")){
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
            this.arr.push(e);
          }
        });
           console.log(this.arr);
    i=this.sharedData.nowPi;
    this.arr.reverse().forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
    i++;
     });

     this.sharedData.length= this.sharedData.length+this.arr.length;
     this.sharedData.nowPi=i-1;
     console.log(this.sharedData.sharedplaylist)
     this.sharedData.callMethodOfSecondComponent("load"); 
      });
    }
  
 
  
  // this.sharedData.callMethodOfSecondComponent(); 
}

}
