import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../model/role";

@Component({
  selector: 'app-page-switch-role',
  templateUrl: './page-switch-role.component.html',
  styleUrls: ['./page-switch-role.component.css']
})
export class PageSwitchRoleComponent implements OnInit {
  private username!:String

  constructor(private router:Router,private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.username=params['username']
      console.log(params)
    })
  }

  addRoleGestionaireToUser(){

    this.userService.ajouterRoleGestionaire(this.username).subscribe(
      {

        next:data=>{
          this.router.navigate(['/users'])
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }
}
