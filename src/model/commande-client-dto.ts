/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
import {ArticleDto} from "./article-dto";
export interface CommandeClientDto {
  id?: number;
  code?: string;
  dateCommande?: Date;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  client?: ClientDto;
  idEntreprise?: string;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
  commandeLivree?: boolean;
  article?: Array<ArticleDto>;
}
