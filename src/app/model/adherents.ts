import {User} from "./user";
import {Association} from "./association";

export interface Adherents {
  id:number;
  nom:string;
  licenseStart:Date;
  licenseStop:Date;
  notValid:boolean;
  user:User;
  association:Association;
  isAdherent:boolean;
  email:string;
}
