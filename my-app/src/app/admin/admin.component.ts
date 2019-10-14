import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';
import { DbCrudService } from '../db-crud.service';
import { from } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private crud: DbCrudService) { }
  m;
  o;
  public istrue:boolean=false;
  ngOnInit() {
        this.m = $("#m").val();
        this.o =$("#o").val();
  }
  public sns = ["User_details", "Music_details"];
  public sos = ["Insert", "Read", "Delete", "Edit"];
  public on_click(): void {
    this.ngOnInit();
    if(this.o=='Insert' && this.m=='User_details'){
      console.log('in')
      this.istrue=true;
    }
    else{
      this.istrue=false;
    }
    this.crud.getData(this.m).subscribe(data => { console.log(data); })
  }
}

export class user {
  public name: String;
  public Password: String;
}
