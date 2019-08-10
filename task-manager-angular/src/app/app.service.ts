import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private API_PATH:string = "http://localhost:3000/";

  constructor(private http: HttpClient, private router: Router){

  }


  createTask(task): Observable<any>{
    return this.http.post<any>(`${this.API_PATH}tasks`,task,{
      observe: "response"
    }).pipe(map((httpResponse:HttpResponse<any>)=>{
      return httpResponse.body;
    }));
  }


  getAllTasks(): Observable<any>{
    return this.http.get<any>(`${this.API_PATH}tasks`,{
      observe: "response"
    }).pipe(map((httpResponse:HttpResponse<any>)=>{
      return httpResponse.body;
    }));
  }
  updateTask(task):Observable<any>{
   return this.http.put<any>(this.API_PATH+"tasks/"+task._id,task,{
     observe: "response"
   }).pipe(map((httpResponse:HttpResponse<any>)=>{
     return httpResponse.body;
   }));
 }
  
 
}