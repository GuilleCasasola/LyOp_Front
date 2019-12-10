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
    var httpOptions;
    return this.http.post(API_URL+"lineal",data,httpOptions);
    
  }

  
  public entera(data){
    var httpOptions;
    return this.http.post(API_URL+"integer",data,httpOptions);
    
  }

  public sensibilidad(data){
    var httpOptions;
    return this.http.post('http://localhost:8000/'+"sensibility",data,httpOptions);
    
  }

  public scheduling(data){
    var httpOptions;
    return this.http.post('http://localhost:8000/'+"scheduling", data, httpOptions);
  }
}
