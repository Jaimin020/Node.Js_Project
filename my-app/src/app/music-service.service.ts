import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry,   map, catchError, filter, scan } from 'rxjs/operators'; 
class Imusic{
  Music_id:String;
  Name: String;
  File: String;
  Image: String;
  Gener: String;
  Music_count: Number;
  Artist: any;
  Time_stamp: Date;
  Quility: Number;
  length: Number;
  Type: String
}
export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class MusicServiceService {
  constructor(private http: HttpClient) { }

  private _url :string = "http://localhost:8000/songs"
  getMusic():Observable<Imusic[]> {
    return this.http.get<Imusic[]>(this._url)
      }
 
}
