/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  id?: string;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  category?: CategoryDto;
  idEntreprise?: string;
}
