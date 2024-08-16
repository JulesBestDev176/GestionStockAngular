import {EntrepriseDto} from "../model/entreprise-dto";
import {RolesDto} from "../model/roles-dto";

export class UserModel {
  id!: string;
  nom!: string;
  code_fiscale!: string;
  email!: string;
  adresse1!: string;
  adresse2!: string;
  ville!: string;
  code_postal!: string;
  pays!: string;
  description!: string;
  telephone!: string;
  password!: string;
  photo!: string;
  entreprise!: EntrepriseDto;
  roles!: Array<RolesDto>;
}
