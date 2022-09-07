import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Association} from "../model/association";
import {AssociationService} from "../services/association.service";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Routes} from "@angular/router";
import {AuthService} from "../services/auth.service";
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {
  newAssociationFormGroup!:FormGroup;

  constructor(public auth:AuthService,private activatedRoute:ActivatedRoute,private userService:UserService,private fb:FormBuilder,public assoService:AssociationService) { }

  ngOnInit(): void {
    this.chargerForm()

  }

  private chargerForm(){

    this.newAssociationFormGroup=this.fb.group(
      {
        numRNA:this.fb.control(null,[Validators.required,Validators.max(9)]),
        nom:this.fb.control(null,[Validators.required,Validators.maxLength(40)]),
        nomPresidentAsso:this.fb.control(null,Validators.required),
        numTelAsso:this.fb.control(null,Validators.required),
        email:this.fb.control(null,[Validators.required,Validators.email]),
        description:this.fb.control(null,[Validators.maxLength(255),Validators.required]),

      }
    )
  }

  saveAsso() {
    let asso:Association = this.newAssociationFormGroup.value
    this.assoService.saveAsso(asso).subscribe({
      next:data=>{

        console.log(data)
        alert("asso crée avec succes")
        this.newAssociationFormGroup.reset()

      },
      error:err => {
        console.log(err)
      }
    })
  }
}
