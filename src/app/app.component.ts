import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "./services/user.service";
import {User} from "./model/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-association';
  user!:Observable<User>;

constructor(public authService:AuthService, private router:Router)
{

}

  ngOnInit ():void {

    this.authService.loadToken();
    if (this.authService.getToken()==null ||
      this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }


}
