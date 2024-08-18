/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeClient } from './commande-client';
export interface Client {
  id?: string;
  creationDate?: number;
  lastModifiedDate?: number;
  nom?: string;
  prenom?: string;
  photo?: string;
  mail?: string;
  numTel?: string;
  idEntreprise?: string;
  commandeClients?: Array<CommandeClient>;
}
