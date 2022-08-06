import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, connect, map, Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl: string = "http://localhost:8080/asso/user/save";


  constructor(private http: HttpClient,private authService:AuthService) {


  }

  getUserById(id: number):Observable<User>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeader = new HttpHeaders({"Authorization":jwt})
    return this.http.get<User>(environment.backendHost+"/user/"+id,{headers:httpHeader}).pipe(
      map((user:User)=>user))
  }

  ajouterUtilisateur(user: User): Observable<User> {
    return this.http.post<User>(environment.backendHost+"/user/save",user)
  }

  afficherToutlesUtilisateur():Observable<Array<User>>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<User>>(environment.backendHost+"/user/all");
  }

  chercherUtilisateur(keyword:string):Observable<Array<User>>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<User>>(environment.backendHost+"/user/search?keyword="+keyword)
  }
  supprimerUtilisateur(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeader = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(environment.backendHost+"/user/"+id,{headers:httpHeader})
  }

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
