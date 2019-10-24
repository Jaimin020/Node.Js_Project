import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DbCrudService } from '../db-crud.service';
import { user } from '../admin/Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private cookieService: CookieService,private crud: DbCrudService,private router: Router) { }

  uo;
  public isedit:boolean=false;
  public pass:string;
  public cpass:string;
  public ismsg:boolean=false;
  public isue:boolean=false;
  public nname:string;
  ngOnInit() {
    console.log(this.cookieService.get('uname'))
    this.crud.FindByName(this.cookieService.get('uname')).subscribe(data=>{
      this.uo=data[0]
      console.log(data[0]);
    })
  }

  public Edit():void{
    this.isedit=true;
  }

  public Change():void{
    if(this.pass == this.cpass && (this.pass!=undefined && this.cpass!=undefined)){
      console.log(this.uo._id)
      this.ismsg=false;
      var eo = new user(this.uo.name, this.pass)
      this.crud.EditData("User_details", this.uo._id, JSON.stringify(eo)).subscribe(data =>{ 
        console.log(data)
        this.uo.Password=this.pass;
        //this.router.navigate(['/user_details'])
        //window.location.reload();
        this.isedit=false;
      });
    }
    else{
      this.ismsg=true;
    }
  }
  public Editun():void{
    this.isue=true;
  }
  public Changeun():void{
    var nuo = new user(this.nname, this.uo.Password)
    console.log(nuo)
    this.cookieService.set('uname',this.nname)
      this.crud.EditData("User_details", this.uo._id, JSON.stringify(nuo)).subscribe(data =>{ 
        console.log(data)
        this.uo.name=this.nname;
        this.isue=false;
        //this.router.navigate(['/user_details'])
       // window.location.reload();
      });
  }

}
