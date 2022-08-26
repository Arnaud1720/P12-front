import {User} from "./user";
import {Association} from "./association";

export class Activites{
  id!:number
  description!:string
  dateDebut!:Date
  dateFin!:Date
  userAtc!:User
  Association!:Association
}


