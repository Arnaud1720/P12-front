import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, map, Observable, switchMap, throwError} from "rxjs";
import {Activites} from "../model/Activites";
import {ActivitesService} from "../services/activites.service";
import {AuthService} from "../services/auth.service";
import {AdherentService} from "../services/adherent.service";
import {Adherents} from "../model/adherents";
import {Association} from "../model/association";

@Component({
  selector: 'app-association-details',
  templateUrl: './association-details.component.html',
  styleUrls: ['./association-details.component.css']
})
export class AssociationDetailsComponent implements OnInit {
  assoId!:string;
   idAdh!: string;
   idAct!: string;


  newUserFormGroupActivite!:FormGroup;
  public  showForm: boolean = false;
  public  showAdh: boolean = false;

  activites!:Observable<Array<Activites>>;
  adherent!:Observable<Array<Adherents>>;
  errorMessage!:string;
  actAdh!: Observable<Activites>
  messageError="Impossible de supprimer cette activité! cause: participant inscrit"

  constructor(private adhService:AdherentService,
              public authService:AuthService,
              public activiteService:ActivitesService,
              private activatedRoute: ActivatedRoute,private fb:FormBuilder,  private router:Router) { }

  ngOnInit(): void {

    this.onAddForm()
    this.findAssoById()
    this.findAdhByIdAsso()
    this.displayAllActByIdAsso()

  }
  public onToggleForm(): void {
    this.showForm = !this.showForm;
    console.log(this.showForm)
  }

  public showAdherent(): void {
    this.showAdh = !this.showAdh;
    console.log(this.showForm)
  }

  findAssoById(){
   this.activatedRoute.params.subscribe(data=>{
     this.assoId = data["id"]
     console.log("Id Asso Asso details"+this.assoId)
   })
 }


 displayAllActByIdAsso(){
   this.activites=this.activiteService.afficheActByIdAsso(this.assoId).pipe(
     catchError(err => {
       this.errorMessage=err.message
       return throwError(err)
     })
   )
 }


  saveActivity() {
    let act:Activites= this.newUserFormGroupActivite.value

    this.activiteService.savegardeAct(act,this.assoId).subscribe({
      next:data=>{
        console.log(data)
        alert("une activité a été crée")
        this.newUserFormGroupActivite.reset()
        this.router.navigate(['/list/association']);

      },
      error:err => {
        console.log(err)
      }
    })
  }

  saveActivityAdh() {
    this.activatedRoute.params.pipe(
      map(data=>{
        return{
          idAdh:data['idAdh'],
          idAct:data['idAct'],
        }
      }),
      switchMap(value => this.activiteService.saveActiviteAdh(value.idAdh,value.idAct))
    )
  }

  onAddForm() {
    this.newUserFormGroupActivite=this.fb.group({
      description:this.fb.control(null,[Validators.required,Validators.maxLength(255)]),
      dateDebut:this.fb.control(null,[Validators.required]),
      dateFin:this.fb.control(null,[Validators.required])

    })
  }
  findAdhByIdAsso() {
    this.adherent=this.adhService.findAdhByIdAsso(this.assoId).pipe(
      catchError(err => {
        this.errorMessage=err.message
        return throwError(err)
      })
    )
  }

  deleteAct(act:Activites) {
    let conf=confirm("etes-vous sur .?")
    if(!conf)return;
    if(act.participant>0){
      this.errorMessage=this.messageError;
    }
    this.activiteService.supprimerActivite(act.id).subscribe({
      next: resp => {
        this.displayAllActByIdAsso();
      },
      error:err => {
        console.log(err)
      }
    })
  }

}


