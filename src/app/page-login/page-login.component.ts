import {Component, OnInit} from '@angular/core';
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
  erreur: number = 0;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  // onLoggedin() {
  //   this.authService.login(this.user).subscribe({
  //     next: (data) => {
  //       console.log(data)
  //       // let jwToken = data.headers.get('Authorization')!;
  //       let jwToken = data.headers.get('Authorization')!;
  //
  //       this.authService.saveToken(jwToken);
  //
  //       this.router.navigate(['/']);
  //     },
  //     error: (erreur: any) => {
  //       this.erreur = 1;
  //     }
  //   });
  // }

  onLoggedin() {
    this.authService.login(this.user).subscribe((data) => {
        console.log(data)
        // let jwToken = data.headers.get('Authorization')!;
        let jwToken = data.headers.get('Authorization')!;

        this.authService.saveToken(jwToken);

        this.router.navigate(['/']);
      },
      (erreur: any) => {
        this.erreur = 1;
      });
  }

  ngOnInit(): void {
  }

}
