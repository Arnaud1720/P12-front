import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {AssociationModel} from "../model/association.model";
import {UserModel} from "../model/user.model";

@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.css']
})
export class PageUtilisateursComponent implements OnInit {
  utilisateur!:UserModel[];

  constructor(private  userService:UserService) { }

  ngOnInit(): void {
    this.chargerUtilisateur();
  }

  chargerUtilisateur(){
    //appel service
    this.userService.afficherToutlesUtilisateur().subscribe(
      user=>{
        console.log(user)
        this.utilisateur=user;
      }

    )
  }
}
