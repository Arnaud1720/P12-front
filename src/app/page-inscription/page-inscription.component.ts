import { Component, OnInit } from '@angular/core';
import {UserModel} from "../model/user.model";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
  newUser=new UserModel()

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }
    addUser(){
    this.userService.ajouterUtilisateur(this.newUser)
      .subscribe(user=>{
        console.log(user);
        this.router.navigate(['/login'])
      })
    }
}
