/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  category?: CategoryDto;
  codeArticle?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
