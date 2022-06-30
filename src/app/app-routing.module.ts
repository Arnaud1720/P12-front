import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAssociationComponent} from "./page-association/page-association.component";
import {PageLoginComponent} from "./page-login/page-login.component";
import {PageInscriptionComponent} from "./page-inscription/page-inscription.component";
import {AjouterAssociationComponent} from "./ajouter-association/ajouter-association.component";

const routes: Routes = [
  {path:"creation/utilisateur",component:PageInscriptionComponent},
  {path:"creation/association",component:PageAssociationComponent},
  {path:"list/association",component:PageAssociationComponent},
  {path:"login",component:PageLoginComponent},
  {path:"ajouter/association",component:AjouterAssociationComponent},
  { path: "", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
