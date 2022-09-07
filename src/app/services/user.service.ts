import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, connect, map, Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private  router:Router,private http: HttpClient,private authService:AuthService) {


  }



  addUser(user: User): Observable<User> {
    return this.http.post<User>(environment.backendHost+"/user/save",user)
  }

  displayAllUsers():Observable<Array<User>>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<User>>(environment.backendHost+"/user/all");
  }

  /**
   * Recherche ok
   * @param keyword
   */
  searchUser(keyword:string):Observable<Array<User>>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<User>>(environment.backendHost+"/user/search?keyword="+keyword,{headers:httpHeaders})
  }

  /**
   *
   * @param id
   * Etat Ok
   */
  deleteUser(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeader = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(environment.backendHost+"/user/"+id,{headers:httpHeader})
  }

    consulterUtilisateur(id:number):Observable<User> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<User>(environment.backendHost+"/user/"+id,{headers:httpHeaders})
  }

  ajouterRoleGestionaire(username: String):Observable<User>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<User>(environment.backendHost+"/user/roles/gestionaire/"+username,"",{headers:httpHeaders})
  }

  updateUserWithIdParam(userBody:User,idUser:String):Observable<User>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    console.log("USER_ID Service=="+idUser)
    return this.http.put<User>(environment.backendHost+"/user/update/"+idUser,userBody,{headers:httpHeaders})
  }

  /**
   * Err perso OK
   * @param httpError
   * @private
   */
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.error('An error occurred:', httpError.error.message);
    } else {
      console.error(
        `Backend retoune le code :  ${httpError.status}, ` +
        `body : ${httpError.error}`);
    }
    return throwError('\n' +
      'une erreur c est produite, Veuillez réessayer plus tard.');
  }



}
