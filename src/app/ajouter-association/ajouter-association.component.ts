import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Association} from "../model/association";
import {AssociationService} from "../services/association.service";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {
  newAssociationFormGroup!:FormGroup;
  private errorMessage!: string;
  public user!:User


  constructor(private userService:UserService,private fb:FormBuilder,public assoService:AssociationService) { }

  ngOnInit(): void {
    this.chargerForm()

  }

  private chargerForm(){
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

  saveAsso(iduser:number) {
    let asso:Association = this.newAssociationFormGroup.value
    let idUser=this.userService.getUserById(iduser)
    this.assoService.saveAsso(iduser,asso).subscribe({
      next:date=>{
        alert("asso crée avec succes")
        this.newAssociationFormGroup.reset()

      },
      error:err => {
        console.log(err)
      }
    })
  }
}
