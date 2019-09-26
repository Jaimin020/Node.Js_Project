import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListComponent }from './list/list.component';
import { ChartsComponent } from './charts/charts.component';
import{ HomeComponent} from './home/home.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"charts",component:ChartsComponent},
  {path:"list",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
