/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface FournisseurDto {
  id?: string;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  photo?: string;
  mail?: string;
  numTel?: string;
  idEntreprise?: string;
}
