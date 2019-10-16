import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { MusicServiceService } from '../music-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'my-app';
  data='[    {        "Music_id": "1",        "Name": "Dil Chori",        "File": "./assets/media/01 - Dil Chori - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 20,        "Artist": [            "Ishers",            " Simar Kaur",            " Yo Yo Honey Singh"        ],        "Time_stamp": 20191206,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "2",        "Name": "Subah Subah",        "File": "./assets/media/02 - Subah Subah - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 222,        "Artist": [            "Arijit Singh",            " Prakriti Kakar",            " Amaal Mallik"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "3",        "Name": "Chhote Chhote Peg",        "File": "./assets/media/03 - Chhote Chhote Peg - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 200,        "Artist": [            "Yo Yo Honey Singh",            " Neha Kakkar",            " Navraj Hans"        ],        "Time_stamp": 20171206,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "4",        "Name": "Bom Diggy Diggy",        "File": "./assets/media/04 - Bom Diggy Diggy - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "Zack Knight",            "Jasmin Walia"            ],        "Time_stamp": 20180506,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "5",        "Name": "Kaun Nachdi",        "File": "./assets/media/05 - Kaun Nachdi - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/dc-Cover-ujv0d0lk71202u8r69hd5lm9p4-20180106143337.Medi.jpeg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Guru Randhawa",            " Neeti Mohan"       ],        "Time_stamp": 20151206,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "6",        "Name": "Lakk Mera Hit",        "File": "./assets/media/06 - Lakk Mera Hit - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/3801063563.jpg",        "Gener": "rock",        "Music_count": 420,        "Artist": [            "Sukriti Kakar",            "Mannat Noor",            "Rochak Kohli; "        ],        "Time_stamp": 20190916,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "7",        "Name": "Tera Yaar Hoon Main",        "File": "./assets/media/07 - Tera Yaar Hoon Main - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/Movie-Review-Sonu-Ke-Titu-Ki-Sweety-Movie.jpg",        "Gener": "rock",        "Music_count": 520,        "Artist": [            "Arijit Singh"        ],        "Time_stamp": 20191116,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "8",        "Name": "Sweety Slowly Slowly ",        "File": "./assets/media/08 - Sweety Slowly Slowly - DJMaza.Fun - 320Kbps.mp3",        "Image": "./assets/images/Movie-Review-Sonu-Ke-Titu-Ki-Sweety-Movie.jpg",        "Gener": "rock",        "Music_count": 520,        "Artist": [            "Mika Singh"        ],        "Time_stamp": 20191116,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "9",        "Name": "All Time Low",        "File": "./assets/media/All Time Low - Jon Bellion (192  kbps) (eMP3z.com).mp3",        "Image": "./assets/images/2d2da75168b8b3ae2b549b32157a568e.1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 320,        "Artist": [            "Jon Bellion"        ],        "Time_stamp": 20191006,        "Quility": 320,        "length": 2.3,        "Type": "English"    },    {        "Music_id": "10",        "Name": "All We Ever Knew",        "File": "./assets/media/All We Ever Knew - The Head and the Heart (192  kbps) (eMP3z.com).mp3",        "Image": "./assets/images/Capture.PNG",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "The Head and the Heart"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length": 2.3,        "Type": "English"    },    {        "Music_id": "11",        "Name": "All We Know",        "File": "./assets/media/All We Know (Ft. Phoebe Ryan) From Collage EP - The Chainsmokers (320kbps).mp3",        "Image": "./assets/images/Capture1.PNG",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " The Chainsmokers",            "Phoebe Ryan"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length": 2.3,        "Type": "English"    },    {        "Music_id": "12",        "Name": "Alone ",        "File": "./assets/media/Alone - Alan Walker (192  kbps).mp3",        "Image": "./assets/images/N1-ALANWALKER.png",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " Alan Walker"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length": 2.3,        "Type": "English"    },    {        "Music_id": "13",        "Name": "Animals",        "File": "./assets/media/Animals - Maroon 5.mp3",        "Image": "./assets/images/c05b3c4739a994bca85d932f6d6cb586.1000x1000x1.png",        "Gener": "rock",        "Music_count": 220,        "Artist": [            " Maroon 5"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length": 2.3,        "Type": "English"    },    {        "Music_id": "15",        "Name": "Baarish ",        "File": "./assets/media/Baarish - Half Girlfriend  DJMaza.Life .mp3",        "Image": "./assets/images/Capture3.PNG",        "Gener": "rock",        "Music_count": 220,        "Artist": [            "Ash King ",            " Shashaa Tirupati"        ],        "Time_stamp": 20180206,        "Quility": 320,        "length": 2.3,        "Type": "Hindi"    },    {        "Music_id": "16",        "Name": "Bad Blood",        "File": "./assets/media/Bad Blood.mp3",        "Image": "./assets/images/badblood.jpg",        "Gener": "rock",        "Music_count": 250,        "Artist": [            "Taylor Swift"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    },    {        "Music_id": "17",        "Name": "Banjaara",        "File": "./assets/media/Banjaara (Ek Villain) -190Kbps  DJMaza.Info .mp3",        "Image": "./assets/images/jaise-banjaare.jpg",        "Gener": "rock",        "Music_count": 250,        "Artist": [            "Mohd. Irfan"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "Hindi"    },    {        "Music_id": "18",        "Name": "Batameez Dil",        "File": "./assets/media/Batameez Dil.mp3",        "Image": "./assets/images/Capture4.PNG",        "Gener": "rock",        "Music_count": 250,        "Artist": [            "Benny Dayal" ,             "Shefali Alvares"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "Hindi"    },    {        "Music_id": "19",        "Name": "Believer",        "File": "./assets/media/Believer - Imagine Dragons.mp3",        "Image": "./assets/images/86e0d33ebe09cafa4e686ad0f38dc3df1000x1000x1.jpg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Imagine Dragons"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    },    {        "Music_id": "20",        "Name": "Blank Space",        "File": "./assets/media/Blank Space.mp3",        "Image": "./assets/images/Capture5.PNG",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Taylor Swift"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    },    {        "Music_id": "21",        "Name": "Closer",        "File": "./assets/media/Closer - The Chainsmokers (ft. Halsey) (256  kbps).mp3",        "Image": "./assets/images/Capture6.PNG",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "The Chainsmokers",            "ft. Halsey"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    },    {        "Music_id": "22",        "Name": "Complicated",        "File": "./assets/media/Complicated - Dimitri Vegas & Like Mike, David Guetta (feat. Kiira)-1.mp3",        "Image": "./assets/images/Capture7.PNG",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Dimitri Vegas",            " Like Mike",            " David Guetta"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    }    ,    {        "Music_id": "23",        "Name": "Demons",        "File": "./assets/media/Demons - Imagine Dragons.mp3",        "Image": "./assets/images/radioActiveimage.jpg",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Imagine Dragons"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    },    {        "Music_id": "24",        "Name": "Immortals",        "File": "./assets/media/Immortals - Fall Out Boy (320kbps).mp3",        "Image": "./assets/images/Capture8.PNG",        "Gener": "rock",        "Music_count": 120,        "Artist": [            "Fall Out Boy"        ],        "Time_stamp": 20191226,        "Quility": 320,        "length": 3.3,        "Type": "English"    }]' ;
  
  public musiclist;// = JSON.parse(this.data);
  public mlist:any = JSON.parse(this.data);
  public chartsList=[{Name:"Hollywood Top 10",Image:"./assets/resources/Group 5.svg"},{Name:"Today's Top 10",Image:"./assets/resources/Group 8.svg"},{Name:"Bollywood Top 10",Image:"./assets/resources/Group 6.svg"},{Name:"International Top 10",Image:"./assets/resources/Group 4.svg"},{Name:"US's Top 10",Image:"./assets/resources/Group 7.svg"},{Name:"New Realeases",Image:"./assets/resources/Group 9.svg"},{Name:"Zang Originals",Image:"./assets/resources/Group 10.svg"}];
  audio:any;
  public arr=new Array();
  sharedData:SharedDataService;
  public name:String;
  constructor(list:SharedDataService,public dbcontext:MusicServiceService,private cookieService: CookieService) {
    this.sharedData=list;
    
    this.name=cookieService.get('uname');
    console.log(cookieService.get('uname'));

    this.dbcontext.getMusic().subscribe(x => {
      this.musiclist=x;
    });
  }
  addchart(chart){
    console.log(chart);
    console.log(this.sharedData.sharedplaylist);
    this.dbcontext.getMusic().subscribe(x=>{
      x.forEach(e => {
        if(e.Type=="English")
        {this.arr.push(e);}
      });
      console.log(this.arr);
    var i=this.sharedData.nowPi;
    this.arr.forEach(x => { this.sharedData.sharedplaylist.splice(i, 0, x);
      i++;
       });
  
       this.sharedData.length= this.sharedData.length+this.arr.length;
       this.sharedData.nowPi=i-1;
       console.log(this.sharedData.sharedplaylist)
       this.sharedData.callMethodOfSecondComponent(); 
    })
    
    // this.sharedData.callMethodOfSecondComponent(); 
  }
  addsong(song){
   

    this.sharedData.sharedplaylist.splice(this.sharedData.nowPi, 0, song);
    //this.sharedData.sharedplaylist[this.sharedData.length]=song;

    this.sharedData.length= this.sharedData.length+1;
    this.sharedData.nowPi=this.sharedData.nowPi;
    this.sharedData.callMethodOfSecondComponent(); 
  
  } 
   ngOnInit() {
    
  }

}
