import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListComponent }from './list/list.component';
import { ChartsComponent } from './charts/charts.component';
import{ HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"charts",component:ChartsComponent},
  {path:"list/:chart",component:ListComponent},
  {path:"admin/:tn",component:AdminComponent},
  {path:"admin/:tn/:op/:id",component:AdminComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"Register",component:LoginComponent},
  {path:"logout",component:LoginComponent},
  {path:"user_details",component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
