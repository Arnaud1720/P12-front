import { Injectable } from '@angular/core';
import {UserModel} from "../model/user.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = 'http://localhost:8080/asso';
  token!: string ;
  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];

  constructor(private router: Router,
  private http : HttpClient) { }


  login(user : UserModel)
  {
    return this.http.post<HttpResponse<any>>(this.apiURL+'/login', user , {observe:'response'});
  }

  saveToken(jwt: string ){
    this.token = jwt;
    localStorage.setItem('jwt',jwt);
    this.isloggedIn = true;
  }



  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN')>-1);
  }

}
