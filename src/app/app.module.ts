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

@NgModule({
  declarations: [
    AppComponent,
    PageInscriptionComponent,
    PageAssociationComponent,
    PageLoginComponent,
    AjouterAssociationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
