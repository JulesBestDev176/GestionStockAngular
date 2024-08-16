/* tslint:disable */
import { Article } from './article';
export interface Category {
  id?: string;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  designation?: string;
  idEntreprise?: string;
  articles?: Array<Article>;
}
