import {User} from "./user";

export interface Association {
  id:number;
  nom:string;
  description:string;
  dateCreation:Date;
  idUser:User;
  nomPresidentAsso:string;
  numTelAsso:string;
  numRNA:string
  email:string;
  nbrAdherent:number;


}
