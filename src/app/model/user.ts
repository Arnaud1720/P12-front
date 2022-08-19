import {Role} from "./role";
import {Adherents} from "./adherents";
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
  roles!: Role[];
  enabled!: boolean;
  adh!:Array<Adherents>
  asso!:Array<Association>
}
