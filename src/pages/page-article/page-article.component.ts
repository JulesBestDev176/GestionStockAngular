import { Component } from '@angular/core';
import {DetailArticleComponent} from "../../composants/articles/detail-article/detail-article.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {BoutonActionComponent} from "../../composants/bouton-action/bouton-action.component";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.css'
})
export class PageArticleComponent {

}
