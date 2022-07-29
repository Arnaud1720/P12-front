import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UserModel} from "../model/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {
  user=new UserModel();

  constructor(public userService:UserService) { }

  ngOnInit(): void {


  }
  chargerUnUtilisateur() {
    //appel service

  }

}
