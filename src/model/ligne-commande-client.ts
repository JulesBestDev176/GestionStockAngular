/* tslint:disable */
import { Article } from './article';
import { CommandeClient } from './commande-client';
export interface LigneCommandeClient {
  id?: string;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeClient?: CommandeClient;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: string;
}
