import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Association} from "../model/association";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";
import {User} from "../model/user";
import {UserService} from "./user.service";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  apiUrl: string = "http://localhost:8080/asso/association";

  constructor(public userService:UserService,private http: HttpClient,private authService:AuthService) {
  }

  afficheAssociation(): Observable<Array<Association>> {
  let jwt = this.authService.getToken();
  jwt="Bearer "+jwt;
  let httpHeader= new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<Association>>(environment.backendHost+"/association/all",{headers:httpHeader});

  }



  supprimerAssociation(idAsso :number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeader = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(environment.backendHost+"/association/"+idAsso, {headers:httpHeader})
  }


  saveAsso(username: string,asso:Association):Observable<Association> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    // let params = new HttpParams().set('idUser', idUser);
    let params = new HttpParams().set('username', username);
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Association>(environment.backendHost+"/association/save"+{parms:params},asso,{headers:httpHeaders})
  }
}
