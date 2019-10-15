import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';
import { animation } from '@angular/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DbCrudService } from '../db-crud.service';
import{user} from '../admin/Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('balloonEffect', [
      state('initial', style({
        transform: 'scale(1.2)'
      })),
      state('final', style({
        transform: 'scale(1.8)'
      })),
      transition('*<=>*', [animate('20000ms')])
    ]),
    ]
})
export class LoginComponent implements OnInit {
  public isOn:boolean=false;
  public uname:string;
  public password:string;
  public isValid:boolean=true;
  public isLogin:boolean=true;
  constructor(private crud:DbCrudService,private router: Router) { 
    console.log(router.url)
    var t=router.url
    console.log(t)
    if(t==="/login")
    {
      this.isLogin=true;
    }
    else{
      this.isLogin=false;
    }
  }
  ngOnInit() {
    $('#pl').hide();
    $("#uname,#pass").bind('mouseover', function (event) {
      $(this).css("border-bottom", "3px solid rgba(22, 64, 177, 1)");
    });
    $("#uname,#pass").bind('mouseout', function (event) {
      $(this).css("border-bottom", "3px solid rgb(255, 255, 255");
    });
    $("#btn1,#btn2").bind('mouseover', function (event) {
      $(this).css({ "border": "3px solid rgba(22, 64, 177, 1)", "color": "rgba(22, 64, 177, 1)" });
    });
    $("#btn1,#btn2").bind('mouseout', function (event) {
      $(this).css({ "border": "3px solid rgb(255, 255, 255)", "color": " rgb(255, 255, 255)" });
    });
    var imag1 = ["backimg.jpg", "back1.jpg", "back2.jpg"]
    var imag2 = ["back3.jpg", "back4.jpg", "back5.jpg"]
    var i = $('#zoom1');
    var z = $('#zoom2');
    var j = 1;
    var k = 0;
    fun1();
    //fun2();
    function fun1() {
      fadeo();
      function fadeo() {
        i.fadeOut(8000, function () {
          i.attr("src", "./assets/images/" + imag1[(j++) % 3]);
          fadei();
        });
        z.fadeIn(8000);
      }

      function fadei() {
        z.fadeOut(8000, function () {
          z.attr("src", "./assets/images/" + imag2[(k++) % 3]);
        })
        i.fadeIn(8000, function () {
          fadeo();
        });

      }
    }
  }
  public check_user():void{
    //console.log("uname:"+this.uname +"Password:"+ this.password)
     var uo=new user(this.uname,this.password)
     
     this.crud.insertData("User_details",JSON.stringify(uo)).subscribe(data=>{
       //console.log(data)
       if(data.check=='t')
       {
          //console.log("valid")
          this.isValid=true;
          $('#pl').show();
          this.router.navigate(['/'])
       }
       else{
        //console.log("Invalid")
          this.isValid=false;
       }
     });
    
  }
  public Register():void
  {
      this.router.navigate(['/Register'])
  }
  public register_user():void{
      this.router.navigate(['/login'])
  }

}
