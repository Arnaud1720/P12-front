import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
   newUserFormGroup!:FormGroup;

  constructor(private userService:UserService,
              private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
      //init form
    this.chargemementForm()
  }

    public chargemementForm(){
      this.newUserFormGroup=this.fb.group({
        lastName:this.fb.control(null,[Validators.required,Validators.maxLength(30)]),
        fristName:this.fb.control(null,[Validators.required,Validators.maxLength(30)]),
        phoneNumber:this.fb.control(null,[Validators.required,Validators.maxLength(11)]),
        adressPostal:this.fb.control(null,[Validators.required,Validators.maxLength(70)]),
        password:this.fb.control(null,[Validators.required,Validators.maxLength(20),Validators.minLength(4)]),
        email:this.fb.control(null,[Validators.email,Validators.required,Validators.minLength(5)]),
        username:this.fb.control(null,[Validators.required,Validators.maxLength(30)])
      })
    }

  saveUser() {
    let user:User = this.newUserFormGroup.value
    this.userService.addUser(user).subscribe({
      next:user=>{
        alert("utilisateur enregister avec suces ");
        this.newUserFormGroup.reset();
        this.router.navigate(['/login']);

      },
      error:err => {
        console.log(err);

      }
    })
  }
}
