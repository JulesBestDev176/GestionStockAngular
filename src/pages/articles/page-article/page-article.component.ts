import {Component, OnInit} from '@angular/core';
import {DetailArticleComponent} from "../../../composants/articles/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.css'
})
export class PageArticleComponent implements OnInit {

  constructor(
    private router : Router
  ) {}
  nouveauArticle() {
    this.router.navigate(['nouvelarticles']);
  }

  ngOnInit(): void {
  }
}
