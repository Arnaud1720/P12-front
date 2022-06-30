import { Component, OnInit } from '@angular/core';
import {AssociationService} from "../services/association.service";
import {AssociationModel} from "../model/association.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-association',
  templateUrl: './page-association.component.html',
  styles: [
  ]
})
export class PageAssociationComponent implements OnInit {

  association!:AssociationModel[];

  constructor(private associationService:AssociationService, private router:Router) { }

  ngOnInit(): void {
      this.chargerAssociation();
  }
   chargerAssociation(){
     this.associationService.afficheAssociation().subscribe(asso=>{
       console.log(asso)
       this.association=asso;
     })
   }

   supprimerAssociation(a:AssociationModel){
    let conf = confirm("Etes-vous sur? ");
    if(conf){
      this.associationService.supprimerAssociation(a.id).subscribe(()=>{
          console.log("produit supprimer")
            this.chargerAssociation();
          this.router.navigate(['list/association'])
      }

      )
    }
   }

}

