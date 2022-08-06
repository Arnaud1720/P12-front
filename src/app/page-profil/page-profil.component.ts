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

  userId!:number
  user!:User;
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.getProfilById()


  }

  getProfilById()
  {
    this.activatedRoute.params.subscribe(params=>{
      this.userId=parseInt(params['id']);
      this.userService.getUserById(this.userId).pipe(
        map((user:User)=>this.user=user)
      ).subscribe()
    })
  }

}
