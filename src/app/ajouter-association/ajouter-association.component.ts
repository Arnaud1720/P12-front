import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Association} from "../model/association";
import {AssociationService} from "../services/association.service";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Routes} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {
  newAssociationFormGroup!:FormGroup;
  private errorMessage!: string;
  public currentUser = new User();
  public username="test";

  constructor(private auth:AuthService,private activatedRoute:ActivatedRoute,private userService:UserService,private fb:FormBuilder,public assoService:AssociationService) { }

  ngOnInit(): void {

    this.chargerForm()

  }

  private chargerForm(){
    this.userService.consulterUtilisateurParPseudo(this.activatedRoute.snapshot.params['username']).subscribe(
      user => {
        this.currentUser = user
      })
    this.newAssociationFormGroup=this.fb.group(
      {
        nom:this.fb.control(null,[Validators.required,Validators.maxLength(40)]),
        nomPresidentAsso:this.fb.control(null,Validators.required),
        numTelAsso:this.fb.control(null,Validators.required),
        email:this.fb.control(null,[Validators.required,Validators.email]),
        description:this.fb.control(null,[Validators.maxLength(255),Validators.required]),

      }
    )
  }

  saveAsso(username:string) {

    let asso:Association = this.newAssociationFormGroup.value

    this.assoService.saveAsso(username,asso).subscribe({
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
