import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AssociationModel} from "../model/association.model";
import {Observable} from "rxjs";
const httpOptions={
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  apiUrl: string = "http://localhost:8080/asso/association";

  constructor(private http: HttpClient) {
  }

  afficheAssociation(): Observable<AssociationModel[]> {
    return this.http.get<AssociationModel[]>(this.apiUrl);
  }

  supprimerAssociation(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
  }
  ajouterAssociation(asso:AssociationModel):Observable<AssociationModel>{
    return this.http.post<AssociationModel>(this.apiUrl,asso,httpOptions)
  }
}
