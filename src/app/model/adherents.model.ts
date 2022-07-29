import {UserModel} from "./user.model";
import {AssociationModel} from "./association.model";

export class AdherentsModel {
  id!:number;
  nom!:string;
  licenseStart!:Date;
  licenseStop!:Date;
  notValid!:boolean;
  user!:UserModel;
  association!:AssociationModel;
  isAdherent!:boolean;
}
