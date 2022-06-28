import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl :string= 'http://localhost:5000/auth/login';
  authenticateUrl:string='http://localhost:5000/auth/authenticate'

  constructor(private http: HttpClient) { }

  login(user:any){
    console.log(user)
    return this.http.post(this.loginUrl,user )
  }

  authenticate(){
    console.log("Authenticate Route")
    return this.http.get(this.authenticateUrl)
  }
}
