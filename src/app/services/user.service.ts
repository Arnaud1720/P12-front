import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {connect, Observable} from "rxjs";
import {UserModel} from "../model/user.model";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl: string = "http://localhost:8080/asso/user";

  constructor(private http: HttpClient) {


  }

  ajouterUtilisateur(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user, httpOptions)
  }

}
