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

const routes: Routes = [
  {path:"creation/utilisateur",component:PageInscriptionComponent},
  {path:"creation/association",component:PageAssociationComponent},
  {path:"list/association",component:PageAssociationComponent},
  {path:"login",component:PageLoginComponent},
  {path:"ajouter/association",component:AjouterAssociationComponent},
  {path:'users',
    children:[
      {path:'',component:PageUtilisateursComponent},
      {path:'profil/:id', component:PageProfilComponent},
      {path:'update/:id',component:PageUpdateUserComponent}
    ],
  },
  {path:"list/association/details/:id",component:AssociationDetailsComponent},
  {path:"act/all",component:PageActiviteComponent},
  {path:"adherent/:id",component:PageAdherentComponent},
  { path: "", redirectTo: "/", pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
