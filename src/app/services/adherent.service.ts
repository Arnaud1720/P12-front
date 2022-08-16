import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Adherents} from "../model/adherents";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  private idAsso!:number; //Ok recupéré le paramètre de manière automatique

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
    const params = new HttpParams().set('idAsso', this.idAsso);
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    let username = localStorage.getItem("username")
    return this.http.post<Adherents>(environment.backendHost + "/adherent/" + username + "/save?idAsso=" + params.get('idAsso'),adh)

  }
}
