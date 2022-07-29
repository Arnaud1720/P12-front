import { Component, OnInit } from '@angular/core';
import {AssociationService} from "../services/association.service";
import {AssociationModel} from "../model/association.model";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-page-association',
  templateUrl: './page-association.component.html',
  styles: [
  ]
})
export class PageAssociationComponent implements OnInit {

  association!:Observable<Array<AssociationModel>>;
  errorMessage!:string;

  constructor(public authService:AuthService, private associationService:AssociationService, private router:Router) { }

  ngOnInit(): void {
      this.association=this.associationService.afficheAssociation().pipe(
        catchError(err => {
              this.errorMessage=err.message;
          return throwError(err);
        })
      )
  }

   // chargerAssociation(){
   //   this.associationService.afficheAssociation().subscribe(asso=>{
   //     console.log(asso)
   //     this.association=asso;
   //   })
   // }


   // supprimerAssociation(a:AssociationModel){
   //  let conf = confirm("Etes-vous sur? ");
   //  if(conf){
   //    this.associationService.supprimerAssociation(a.id).subscribe(()=>{
   //        console.log("produit supprimer")
   //          this.chargerAssociation();
   //        this.router.navigate(['list/association'])
   //    }
   //
   //    )
   //  }
   // }

}

