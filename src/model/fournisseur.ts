/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeFournisseur } from './commande-fournisseur';
export interface Fournisseur {
  id?: string;
  creationDate?: number;
  lastModifiedDate?: number;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  photo?: string;
  mail?: string;
  numTel?: string;
  idEntreprise?: string;
  commandeFournisseurs?: Array<CommandeFournisseur>;
}
