import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs";
import {ActivitesService} from "../services/activites.service";

@Component({
  selector: 'app-page-activite-detail',
  templateUrl: './page-activite-detail.component.html',
  styleUrls: ['./page-activite-detail.component.css']
})
export class PageActiviteDetailComponent implements OnInit {
  idAct!:String
  idAdh!:String
  constructor(public activiteService:ActivitesService,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.idAct=params['idAct']
      this.idAdh=params['idAdh']
      console.log(params)
    })
  }
  // saveActivityAdh() {
  //   this.activatedRoute.params.pipe(
  //     map(data=>{
  //       return{
  //         idAdh:data['idAdh'],
  //         idAct:data['idAct'],
  //       }
  //     }),
  //     switchMap(value => this.activiteService.saveActiviteAdh(value.idAdh,value.idAct))
  //   )
  // }
   saveActToAdh(){
    this.activiteService.saveActiviteAdh(this.idAdh,this.idAct).subscribe({
      next:data=>{

      },
      error:err => {
        console.log(err)
      }
    })
   }
}
