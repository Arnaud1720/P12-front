import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Association} from "../model/association";
import {environment} from "../../environments/environment";
import {Activites} from "../model/Activites";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ActivitesService {

  constructor(private http: HttpClient,private authService:AuthService) { }

  afficheAssociation(): Observable<Array<Association>> {
    let jwt = this.authService.getToken();
    jwt="Bearer "+jwt;
    let httpHeader= new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<Association>>(environment.backendHost+"/all",{headers:httpHeader});

  }
    afficheActByIdAsso(idAsso:string):Observable<Array<Activites>>{
      let jwt = this.authService.getToken();
      jwt="Bearer "+jwt;
      let httpHeader= new HttpHeaders({"Authorization":jwt})
      console.log("afficheAssoParId: IdAsso=="+idAsso)
      return this.http.get<Array<Activites>>(environment.backendHost+"/act/findall/"+idAsso)
    }
  affichetout():Observable<Array<Activites>>{
    let jwt = this.authService.getToken();
    jwt="Bearer "+jwt;
    let httpHeader= new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<Activites>>(environment.backendHost+"/act/all",{headers:httpHeader})

  }
  savegardeAct(act:Activites,idAsso:String):Observable<Activites>{
    let jwt = this.authService.getToken()
    jwt="Bearer "+jwt
    let httpHeader= new HttpHeaders({"Authorization":jwt})
    let username = localStorage.getItem("username")
    return this.http.post<Activites>(environment.backendHost+"/act/save/"+username+"/"+idAsso,act,{headers:httpHeader})
  }

  saveActiviteAdh(idAdh:string,idAct:string):Observable<Activites>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Activites>(environment.backendHost+"/act/save/adh/activite?idAdh="+idAdh+"&idAct="+idAct,"",{headers:httpHeaders})
  }


  supprimerActivite(idAct :number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeader = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(environment.backendHost+"/act/delete/"+idAct, {headers:httpHeader})
  }
}
