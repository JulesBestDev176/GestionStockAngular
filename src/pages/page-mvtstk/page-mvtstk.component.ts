import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../composants/bouton-action/bouton-action.component";
import {DetailsMvtstkArticleComponent} from "../../composants/articles/details-mvtstk-article/details-mvtstk-article.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [
    BoutonActionComponent,
    DetailsMvtstkArticleComponent,
    PaginationComponent,
    BoutonActionComponent
  ],
  templateUrl: './page-mvtstk.component.html',
  styleUrl: './page-mvtstk.component.css'
})
export class PageMvtstkComponent {

}
