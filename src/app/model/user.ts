import {Role} from "./role";
import {Activites} from "./Activites";
import {Association} from "./association";

  export class User {
    id!: number
    lastName!: string;
    fristName!: string;
    phoneNumber!: string;
    adressPostal!: string;
    password!: string;
    email!: string;
    username!: string;
    roles!: [];
    act!:Array<Activites>
    enabled!: boolean;
    asso!:Array<Association>

  }
