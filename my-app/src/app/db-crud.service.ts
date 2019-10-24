import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import {user} from './admin/Model/User'
const headers=new HttpHeaders().set('Content-Type','application/json');
@Injectable({
  providedIn: 'root'
})

export class DbCrudService {
  private _url:String="http://localhost:8000"
  constructor(private http: HttpClient) { }
  
  public getData(s:String):Observable<any>{
    console.log(s)
    var a:any;
    
    return this.http.post<any>("http://localhost:8000/details/"+s,{
      headers:headers
    })
  }

  public loginData(s:String,o:String):Observable<any>{
      return this.http.post<any>("http://localhost:8000/login/"+s,o,{
        headers:headers
      })
  }

  public InsertData(s:String,o:String):Observable<any>{
    return this.http.post<any>("http://localhost:8000/insert/"+s,o,{
      headers:headers
    })
  }

  public IdData(s:String,i:String):Observable<any>{
    return this.http.post<any>("http://localhost:8000/id_d/"+s+"/"+i,{
      headers:headers
    })
  }

  public EditData(s:String,i:String,o:String):Observable<any>{
    return this.http.post<any>("http://localhost:8000/Edito/"+s+"/"+i,o,{
      headers:headers
    })
  }

  public DeleteData(s:String,i:String):Observable<any>{
    return this.http.post<any>("http://localhost:8000/delete_d/"+s+"/"+i,{
      headers:headers
    })
  }
}
