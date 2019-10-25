import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Search Your Favourite song';
  searchText="";
  mulist;
  constructor(public sharedData:SharedDataService, private dbcontext:MusicServiceService) {
    //this.heroes=this.heroes.filter(x=>{(x.name.includes(this.searchText))});
    this.dbcontext.getMusic().subscribe(x=>{
      this.mulist=x;
      });
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
  }

}
