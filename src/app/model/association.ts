import {User} from "./user";

export class Association {
  id!:number;
  nom!:string;
  description!:string;
  dateCreation!:Date;
  idUser!:User;
  nomPresidentAsso!:string;
  numTelAsso!:string;
  email!:string;
  nbrAdherent:number=0;


}
