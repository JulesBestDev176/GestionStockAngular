/* tslint:disable */
import { FournisseurDto } from './fournisseur-dto';
import { LigneCommandeFournisseurDto } from './ligne-commande-fournisseur-dto';
import {ArticleDto} from "./article-dto";
export interface CommandeFournisseurDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  fournisseur?: FournisseurDto;
  idEntreprise?: string;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
  commandeLivree?: boolean;
  article?: Array<ArticleDto>;

}
