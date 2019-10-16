import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListComponent }from './list/list.component';
import { ChartsComponent } from './charts/charts.component';
import{ HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"charts",component:ChartsComponent},
  {path:"list/:chart",component:ListComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"Register",component:LoginComponent},
  {path:"logout",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
