import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';
import { DbCrudService } from '../db-crud.service';
import { from } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { combineAll } from 'rxjs/operators';
import { user } from './Model/User';
import { setTimeout } from 'timers';
import { MusicServiceService } from '../music-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tn;
  op;
  id;
  eu;
  public isud: boolean = false;
  public isedit: boolean = false;
  constructor(private crud: DbCrudService, private route: ActivatedRoute, private router: Router,public db:MusicServiceService) {
  }
  public d = [];
  public musicD=[];
  public istrue: boolean = false;
  uo;
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('tn'));
    this.tn = this.route.snapshot.paramMap.get('tn');
    this.op = this.route.snapshot.paramMap.get('op');
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.op)
    console.log(this.tn);
    if (this.tn != null) {
      if (this.op != "Delete") {
        this.on_click();
      }
      if (this.tn == "User_details") {
        this.isud = true;
        if (this.op == "Edit") {
          //this.isud = false;
          this.isedit = true;
          this.Edit();
        }
        
        if (this.op == "Delete") {
          //this.isud = false;
          this.crud.DeleteData(this.tn, this.id).subscribe(data => {
            console.log(data)
            this.router.navigate(['/admin/' + this.tn])
          })
          //setTimeout(function(){},100);
        }
        if (this.op == "madmin") {
          this.crud.IdData(this.tn, this.id).subscribe(data => {
            //console.log(data[0])
            this.uo = data[0]
          })
          var u = new user(this.uo.name,this.uo.Password)
          console.log(u)
          this.crud.EditData(this.tn, this.id, JSON.stringify(u)).subscribe(data => console.log(data))
        }
      }
      if (this.tn == "Music_details"){
        this.db.getMusic().subscribe(x=>{
          this.musicD=x;
          console.log(x);
      });
    }
  }
}
  public sns = ["User_details", "Music_details"];
  public on_click(): void {

    this.crud.getData(this.tn).subscribe(data => {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        this.d[i] = data[i]
      }
    })
  }
  public Edit(): void {
    this.crud.IdData(this.tn, this.id).subscribe(data => {
      console.log(data[0])
      this.uo = data[0]
    })
  }
  uname;
  password;
  public Edit_data(): void {
    console.log(typeof (this.uname) + "+" + this.password)
    if (typeof (this.uname) == 'undefined') {
      this.uname = this.uo.name
    }
    if (typeof (this.password) == 'undefined') {
      this.password = this.uo.Password
    }
    var uo = new user(this.uname, this.password)
    this.crud.EditData(this.tn, this.id, JSON.stringify(uo)).subscribe(data =>{ console.log(data)
      this.router.navigate(['/admin/' + this.tn])})
  }
  public open_music():void{
    this.db.getMusic().subscribe(x=>{
      this.musicD=x;
      console.log(x);
    });
      /*for (var i = 0; i < data.length; i++) {
        this.d[i] = data[i]
      }*/
  }
}
