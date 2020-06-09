import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Knowledge } from '../interface/knowledge';

// const CONFIG={headers:new HttpHeaders({token:localStorage.getItem("Token")})};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  public GetJobs()
  {
    return this.http.get("http://127.0.0.1:8000/jobs")
  }

  public GetKnowledges()
  {
    return this.http.get("http://127.0.0.1:8000/knowledges");
  }

  public GetProjects()
  {
    return this.http.get("http://127.0.0.1:8000/projects");
  }

  // public GetKnowledge()
  // {
  //   return this.http.post("http://127.0.0.1:8000/token",
  //   {
  //     user:
  //     {
  //       nombre:"Marcos",
  //       nivel:2,
  //       at:"9999999999999999"
  //     }});
  // }

  // LogIn(usr,pass)
  // {
  //   return this.http.post("http://127.0.0.1:8000/token",
  //   {
  //     user:
  //     {
  //       usuario:usr,
  //       contrasena:pass,
  //     }});
  // }

  // Listado()
  // {
  //   return this.http.get("http://127.0.0.1:8000/Listado",CONFIG);
  // }
}
