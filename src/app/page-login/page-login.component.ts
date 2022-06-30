import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {UserModel} from "../model/user.model";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  user = new UserModel();
  erreur: number=0;

  constructor(private authService : AuthService,
              private router: Router) { }


  onLoggedin(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      // alert('Login ou mot de passe incorrecte!');
      this.erreur=1;
  }


  ngOnInit(): void {
  }

}
