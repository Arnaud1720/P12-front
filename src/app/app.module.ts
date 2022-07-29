import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageAssociationComponent } from './page-association/page-association.component';
import { PageLoginComponent } from './page-login/page-login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AjouterAssociationComponent } from './ajouter-association/ajouter-association.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { PageUtilisateursComponent } from './page-utilisateurs/page-utilisateurs.component';
import { IconesComponent } from './allicones/icones/icones.component';
import { PageAdherentComponent } from './page-adherent/page-adherent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageInscriptionComponent,
    PageAssociationComponent,
    PageLoginComponent,
    AjouterAssociationComponent,
    PageProfilComponent,
    PageUtilisateursComponent,
    IconesComponent,
    PageAdherentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
