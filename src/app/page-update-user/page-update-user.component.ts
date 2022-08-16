import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {User} from "../model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-update-user',
  templateUrl: './page-update-user.component.html',
  styleUrls: ['./page-update-user.component.css']
})
export class PageUpdateUserComponent implements OnInit {
  currentUser = new User();
  newUserFormGroupUpdate!:FormGroup;
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userService.consulterUtilisateur(this.activatedRoute.snapshot.params['id']).subscribe(
      user =>{this.currentUser=user}
    )

  }

  public chargeNewFormUpdate(){
    this.newUserFormGroupUpdate=this.fb.group({
      phoneNumber:this.fb.control(null,[Validators.required,Validators.maxLength(11)]),
      adressPostal:this.fb.control(null,[Validators.required,Validators.maxLength(70)]),
      password:this.fb.control(null,[Validators.required,Validators.maxLength(20),Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.email,Validators.required,Validators.minLength(5)]),
    })
  }

  updateUser(){
    this.userService.updateUser(this.currentUser).subscribe(user=>{
      this.router.navigate(['users'])
    })
  }

}
