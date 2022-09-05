import {User} from "./user";
import {Association} from "./association";
import {Adherents} from "./adherents";

export class Activites{
  id!:number
  description!:string
  dateDebut!:Date
  dateFin!:Date
  userAtc!:User
  association!:Association
  participant!:number;
  adherents!:Adherents[]
}


