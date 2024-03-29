import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FormsModule } from "@angular/forms";
import { SharedDataService } from './shared-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { DbCrudService } from './db-crud.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    HomeComponent,
    ListComponent,
    PlaylistComponent,
    AdminComponent,
    LoginComponent,
    UserdetailsComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, Ng2SearchPipeModule
  ],
  providers: [SharedDataService,DbCrudService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
