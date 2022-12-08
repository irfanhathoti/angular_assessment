import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private http: HttpClient) { }


  //creating the service for getting the all data
  getAllData() {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((response) => {
      return response
    }))
  }


  uploadFile(file:any):Observable<any>{
    // Create From Data
    const formData = new FormData();
    // Store form name as"file"with file data
    formData.append("profile",file,file.name);
    return this.http.post("http://localhost:8000/upload",formData)
  }


  getJobDetail(id: any) {
    return this.http.get<any>('http://localhost:3000/posts/' + id).pipe(map((response) => {
      return response
    }))
  }



}


