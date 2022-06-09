import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { 

  }
  url="http://localhost:3000/enroll"
  enroll(user:user){
    return this.http.post(this.url,user)

  }
}

