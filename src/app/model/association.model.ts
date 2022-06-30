import {UserModel} from "./user.model";

export class AssociationModel{
  id!:number
  nom!:string;
  description!:string;
  users!:UserModel
  dateCreation!:Date
}
