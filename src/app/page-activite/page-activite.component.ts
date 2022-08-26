import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Activites} from "../model/Activites";
import {ActivitesService} from "../services/activites.service";
import {Association} from "../model/association";
import {AssociationService} from "../services/association.service";

@Component({
  selector: 'app-page-activite',
  templateUrl: './page-activite.component.html',
  styleUrls: ['./page-activite.component.css']
})
export class PageActiviteComponent implements OnInit {
  activites!:Observable<Array<Activites>>;
  association!:Observable<Array<Association>>;

  errorMessage!:string;

  constructor(private activiteService:ActivitesService,private associationService:AssociationService) { }

  ngOnInit(): void {
    this.activites=this.activiteService.affichetout().pipe(
      catchError(err => {
        this.errorMessage=err.message
        return throwError(err)
      })
    )
  }
  afficheAssociation(){
    this.association=this.associationService.afficheAssociation().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    )
  }
}
