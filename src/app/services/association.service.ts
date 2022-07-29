import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AssociationModel} from "../model/association.model";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  apiUrl: string = "http://localhost:8080/asso/association";

  constructor(private http: HttpClient,private authService:AuthService) {
  }

  afficheAssociation(): Observable<Array<AssociationModel>> {
  let jwt = this.authService.getToken();
  jwt="Bearer "+jwt;
  let httpHeader= new HttpHeaders({"Authorization":jwt})
    return this.http.get<Array<AssociationModel>>(this.apiUrl+"/all",{headers:httpHeader});

  }



  supprimerAssociation(idAsso :number) {
    const url = `${this.apiUrl}/save/${idAsso}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders})
  }

  ajouterAssociation(idUser:number,idAsso:number,asso:AssociationModel):Observable<AssociationModel>{
    const url = `${this.apiUrl}/save/${idUser}/${idAsso}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<AssociationModel>(url,asso,{headers:httpHeaders})
  }
}
