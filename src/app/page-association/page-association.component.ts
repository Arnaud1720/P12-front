import { Component, OnInit } from '@angular/core';
import {AssociationService} from "../services/association.service";
import {Association} from "../model/association";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {UserService} from "../services/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-page-association',
  templateUrl: './page-association.component.html',
  styles: [
  ]
})
export class PageAssociationComponent implements OnInit {

  association!:Observable<Array<Association>>;
  errorMessage!:string;
  constructor(public authService:AuthService, private associationService:AssociationService, private router:Router) { }

  ngOnInit(): void {
      this.afficheAssociation()
  }

  afficheAssociation(){
    this.association=this.associationService.afficheAssociation().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    )
  }

  deleteAsso(asso:Association) {
    let conf=confirm("etes-vous sur .?")
    if(!conf)return;
    this.associationService.supprimerAssociation(asso.id).subscribe({
      next: resp => {
        this.afficheAssociation();
      },
      error:err => {
        console.log(err)
      }
    })
  }
}

