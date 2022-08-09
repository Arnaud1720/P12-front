import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {map, Subscription} from "rxjs";
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {
  currentUser = new User();

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.consulterUtilisateur(this.activatedRoute.snapshot.params['id']).subscribe(
      user => {
        this.currentUser = user
      }
    )
  }

}
