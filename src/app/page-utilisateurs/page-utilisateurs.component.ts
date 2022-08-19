import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Association} from "../model/association";
import {User} from "../model/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.css']
})
export class PageUtilisateursComponent implements OnInit {

  searchFormGroup:FormGroup|undefined
  utilisateur!:Observable<Array<User>>;

  errorMessage!:string;
  constructor( private  userService:UserService, private fb:FormBuilder,private router:Router) { }


  ngOnInit(): void {
        this.chargerUtilisateur()
    this.searchFormGroup=this.fb.group({
        keyword:this.fb.control("")
      }
    )

  }

  chargerUtilisateur() {
    this.utilisateur=this.userService.displayAllUsers().pipe(
      catchError(err => {
        this.errorMessage=err.message
        return throwError(err)
      })
    )
  }

  supprimerUtilisateur(u:User){
    let conf=confirm("etes-vous sur .?")
    if(!conf)return;
    this.userService.deleteUser(u.id).subscribe({
      next: resp => {
        this.chargerUtilisateur();
      },
      error:err => {
        console.log(err)
      }
    })
  }

  searchUser() {
    let kw = this.searchFormGroup?.value.keyword;
    this.utilisateur=this.userService.searchUser(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    )
  }

}
