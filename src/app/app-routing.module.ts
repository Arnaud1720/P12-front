import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAssociationComponent} from "./page-association/page-association.component";
import {PageLoginComponent} from "./page-login/page-login.component";
import {PageInscriptionComponent} from "./page-inscription/page-inscription.component";
import {AjouterAssociationComponent} from "./ajouter-association/ajouter-association.component";
import {PageProfilComponent} from "./page-profil/page-profil.component";
import {PageUtilisateursComponent} from "./page-utilisateurs/page-utilisateurs.component";
import {PageAdherentComponent} from "./page-adherent/page-adherent.component";
import {PageUpdateUserComponent} from "./page-update-user/page-update-user.component";
import {AssociationDetailsComponent} from "./association-details/association-details.component";
import {PageActiviteComponent} from "./page-activite/page-activite.component";
import {PageSwitchRoleComponent} from "./page-switch-role/page-switch-role.component";
import {PageActiviteDetailComponent} from "./page-activite-detail/page-activite-detail.component";

const routes: Routes = [
  {path:"creation/utilisateur",component:PageInscriptionComponent},
  {path:"creation/association",component:PageAssociationComponent},
  {path:"list/association",component:PageAssociationComponent},
  {path:"login",component:PageLoginComponent},
  {path:"ajouter/association",component:AjouterAssociationComponent},
  {path:'users',
    children:[
      {path:'',component:PageUtilisateursComponent},
      {path:'update/:id',component:PageUpdateUserComponent},
    ],
  },
  {
    path: "list/association", children: [
      {path: "details/:id", component: AssociationDetailsComponent},
    ],
  },
  {path:"act/all",component:PageActiviteComponent},
  {path:"adherent/:id",component:PageAdherentComponent},
  {path:'user/roles/gestionaire/:username',component: PageSwitchRoleComponent},
  {path:'act/save/:idAdh/:idAct',component:PageActiviteDetailComponent},
  { path: "", redirectTo: "/", pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
