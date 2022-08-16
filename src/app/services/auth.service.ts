import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = 'http://localhost:8080/asso';
  token!: string ;
  claimsUsername!:string;
  public isloggedIn: Boolean = false;
  public roles!:string;
  private helper = new JwtHelperService();
  public loggedUser!:string
  constructor(private router: Router,
  private http : HttpClient) { }


  login(user : User)
  {
    return this.http.post<HttpResponse<any>>(this.apiURL+'/login', user , {observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
  }

  decodeJWT()
  { if (this.token == undefined)
    return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    console.log(this.roles)
    // return console username :: Admin
    this.claimsUsername = decodedToken.username;
    this.roles=decodedToken.roles
    localStorage.setItem("username",this.claimsUsername)
    localStorage.setItem("roles",this.roles)
    console.log(this.claimsUsername)

  }


  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  getToken():string{
    return this.token;
  }

  isAdmin():Boolean{

    if (!this.roles)
      return false;
    return this.roles.indexOf('ADMIN') >=0;

  }

  isGestionaire():Boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('GESTIONAIRE') >=0;

  }

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token= undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
  isNotLogin():Boolean{
    this.isloggedIn = false;
    return true;
  }

  isTokenExpired(): Boolean
  {
    return this.helper.isTokenExpired(this.token); }
}
