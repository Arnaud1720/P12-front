import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Adherents} from "../model/adherents";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private http:HttpClient,private authService:AuthService) {

  }
  displayAllAdherent():Observable<Array<Adherents>>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<Adherents>>(environment.backendHost+"/association/all")
  }

  addNewAdherent(adh:Adherents):Observable<Adherents>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Adherents>(environment.backendHost+"/adherent/"+
      adh.user.id+"/"+adh.association.id+"/save",adh)
  }
}
