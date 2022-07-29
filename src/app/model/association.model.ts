import {UserModel} from "./user.model";

export class AssociationModel{
  id!:number
  nom!:string;
  description!:string;
  dateCreation!:Date
  idUser!:UserModel
  nbrAdherent:number=0;


}
