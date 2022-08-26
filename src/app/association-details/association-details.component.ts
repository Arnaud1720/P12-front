import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Activites} from "../model/Activites";
import {ActivitesService} from "../services/activites.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-association-details',
  templateUrl: './association-details.component.html',
  styleUrls: ['./association-details.component.css']
})
export class AssociationDetailsComponent implements OnInit {
  assoId!:string;
  newUserFormGroupActivite!:FormGroup;
  public  showForm: boolean = false;
  activites!:Observable<Array<Activites>>;
  errorMessage!:string;

  constructor(public authService:AuthService,private activiteService:ActivitesService,private activatedRoute: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.onAddForm()
    this.findAssoById()

    this.activites=this.activiteService.afficheActByIdAsso(this.assoId).pipe(
      catchError(err => {
        this.errorMessage=err.message
        return throwError(err)
      })
    )
    this.activiteService.affichetout().pipe(
      catchError(err => {
        this.errorMessage=err.message
        return throwError(err)
      })
    )

  }
  public onToggleForm(): void {
    this.showForm = !this.showForm;
    console.log(this.showForm)
  }

 findAssoById(){
   this.activatedRoute.params.subscribe(data=>{
     this.assoId = data["id"]
     console.log("Id Asso Asso details"+this.assoId)
   })
 }

  saveActivity() {
    let act:Activites= this.newUserFormGroupActivite.value
    this.activiteService.savegardeAct(act,this.assoId).subscribe({
      next:data=>{
        console.log(data)
        alert("une activité a été crée")
        this.newUserFormGroupActivite.reset()

      },
      error:err => {
        console.log(err)
      }
    })
  }

  onAddForm() {
    this.newUserFormGroupActivite=this.fb.group({
      description:this.fb.control(null,[Validators.required,Validators.maxLength(255)]),
      dateDebut:this.fb.control(null,[Validators.required]),
      dateFin:this.fb.control(null,[Validators.required])

    })
  }
}
