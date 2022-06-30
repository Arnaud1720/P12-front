import { Component, OnInit } from '@angular/core';
import {AssociationService} from "../services/association.service";
import {Router} from "@angular/router";
import {AssociationModel} from "../model/association.model";

@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {
  newAsso=new AssociationModel()
  constructor(private assoService:AssociationService,private router:Router) { }

  ngOnInit(): void {
  }

  addAsso(){
    this.assoService.ajouterAssociation(this.newAsso)
      .subscribe(asso=>{
        console.log(asso)
        this.router.navigate([`/login`])
      })
  }
}
