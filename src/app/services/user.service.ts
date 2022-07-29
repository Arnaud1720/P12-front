import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {connect, Observable} from "rxjs";
import {UserModel} from "../model/user.model";
import {AuthService} from "./auth.service";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl: string = "http://localhost:8080/asso/user/save";
  apiGlobal:string="http://localhost:8080/asso/user";

  constructor(private http: HttpClient,private authService:AuthService) {


  }

  ajouterUtilisateur(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user, httpOptions)
  }

  afficherToutlesUtilisateur():Observable<UserModel[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<UserModel[]>(this.apiGlobal+"/all");
  }

}
