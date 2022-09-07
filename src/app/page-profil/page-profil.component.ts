import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {map, Observable, Subscription} from "rxjs";
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/auth.service";



@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {
  titre="page profil"
  constructor(public authService:AuthService,public userService: UserService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {

  }

}
