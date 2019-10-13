import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';
import { DbCrudService } from '../db-crud.service';
import { user } from './Model/User'
import { from } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private crud: DbCrudService) { }
  m;
  o;
  ngOnInit() {
      this.m=$("#m").val();
      this.o=$("#o").text;
  }
  public sns = ["User_details", "Music_details"];
  public sos=["Insert","Read","Delete","Edit"];
  public user: user;
  public on_click(): void {
    console.log(this.m);
    this.crud.getData(this.m).subscribe(data => { console.log(data[0]); })
  }
}
