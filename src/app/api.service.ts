import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders }    from '@angular/common/http';
import { environment } from '../environments/environment'

const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  public linear(data){
    console.log(API_URL);
    var httpOptions;
    return this.http.post("http://localhost:8000/lineal",data,httpOptions);
    
  }
}
