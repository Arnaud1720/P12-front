import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Adherents} from "../model/adherents";
import {AdherentService} from "../services/adherent.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-page-adherent',
  templateUrl: './page-adherent.component.html',
  styleUrls: ['./page-adherent.component.css']
})
export class PageAdherentComponent implements OnInit {
  adherentFormGroup!:FormGroup
  adherent!:Observable<Array<Adherents>>
  errorMessage!:string;
  idAsso!:number;
  constructor(private authService:AuthService
              ,private router:Router,
              private  adherentService:AdherentService,
              private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.chargementForm()
  }
  public chargementForm(){
    this.adherentFormGroup=this.fb.group({
        nom:this.fb.control("",Validators.required),
    })
  }


  saveAdherent() {
      let adherent:Adherents=this.adherentFormGroup?.value

      this.adherentService.addNewAdherent(adherent).subscribe({
        next:data=>{
          alert("adherent enregister avec sucès")
          this.adherentFormGroup?.reset()
        },
        error:err => {
          console.log(err)
        }
      })
  }
}
