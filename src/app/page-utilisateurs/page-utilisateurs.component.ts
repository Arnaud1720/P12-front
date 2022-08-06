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
  constructor(private user:User, private  userService:UserService, private fb:FormBuilder,private router:Router) { }


  ngOnInit(): void {
        this.chargerUtilisateur()
    this.searchFormGroup=this.fb.group({
        keyword:this.fb.control("")
      }
    )

  }

  userUpdateForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}),
    firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });


  onClickUpdate(userId: number){
    // Get user data for the selected user
    this.userService.getUserById(userId)
      .subscribe(responseData=> {
        this.user = responseData;
        console.log(this.user);
        this.router.navigate([""])
      });
  }

  chargerUtilisateur() {
    this.utilisateur=this.userService.afficherToutlesUtilisateur().pipe(
      catchError(err => {
        this.errorMessage=err.message
        return throwError(err)
      })
    )
  }

  supprimerUtilisateur(u:User){
    let conf=confirm("etes-vous sur .?")
    if(!conf)return;
    this.userService.supprimerUtilisateur(u.id).subscribe({
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
    this.utilisateur=this.userService.chercherUtilisateur(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    )
  }

  private prepareUpdateForm() {
    this.userUpdateForm.setValue({
      id:this.user.id,
      firstName:this.user.fristName,
      lastName:this.user.lastName,
      userType:this.user.email,
    })
  }
}
