import { Injectable } from '@angular/core';
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:UserModel[]= [{"lastName":"arnaud",
  "fristName":"Derisbourg",
  "phoneNumber":"0312141411",
  "adressPostal":"adresse de test",
  "password":"1234",
  "email":"arnaud1720@gmail.com",
  "roles":['USER']},
    {"lastName":"adm_admin",
      "fristName":"Admin",
      "phoneNumber":"0678414478",
      "adressPostal":"adresse de adm",
      "password":"123",
      "email":"Admin@gmail.com",
      "roles":['ADMIN']}

  ]


  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];

  constructor() { }


  SignIn(user :UserModel):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.fristName== curUser.fristName && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = curUser.fristName;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
        localStorage.setItem('roles',String(this.roles))
      }
    });
    return validUser;
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN')>-1);
  }

}
