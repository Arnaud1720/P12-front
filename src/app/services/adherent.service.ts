import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Adherents} from "../model/adherents";
import {environment} from "../../environments/environment";
import {Activites} from "../model/Activites";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private http:HttpClient,private authService:AuthService) {

  }


  addNewAdherent(adh:Adherents,idAsso:string):Observable<Adherents>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    let username = localStorage.getItem("username")
    return this.http.post<Adherents>(environment.backendHost + "/adherent/" + username + "/save?idAsso=" +idAsso,adh)

  }

  findAdhByIdAsso(idAsso:string):Observable<Array<Adherents>>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<Adherents>>(environment.backendHost+"/adherent/"+idAsso)
  }


}
