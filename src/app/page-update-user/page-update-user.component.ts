import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {User} from "../model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-page-update-user',
  templateUrl: './page-update-user.component.html',
  styleUrls: ['./page-update-user.component.css']
})
export class PageUpdateUserComponent implements OnInit {
  newUserFormGroupUpdate!:FormGroup;
  username!:String
  userId!:String
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.userId = data["id"]
      console.log("id User côté component === "+this.userId)
    })
    this.chargeNewFormUpdate()

  }

  public chargeNewFormUpdate(){
    this.newUserFormGroupUpdate=this.fb.group({
      phoneNumber:this.fb.control(null,[Validators.required,Validators.maxLength(11)]),
      adressPostal:this.fb.control(null,[Validators.required,Validators.maxLength(70)]),
      password:this.fb.control(null,[Validators.required,Validators.maxLength(20),Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.email,Validators.required,Validators.minLength(5)]),
    })
  }



    updateUserWithId(){
      let userBody=this.newUserFormGroupUpdate?.value
      this.userService.updateUserWithIdParam(userBody,this.userId).subscribe(userDate=>{
        console.log("Body === "+userBody)
        console.log("USER_ID === "+this.userId)

        this.router.navigate(['/users'])
      })
    }
}
