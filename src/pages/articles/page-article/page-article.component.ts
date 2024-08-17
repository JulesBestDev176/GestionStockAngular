import {Component, OnInit} from '@angular/core';
import {DetailArticleComponent} from "../../../composants/articles/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {Router} from "@angular/router";
import {ArticleDto} from "../../../model/article-dto";
import {ArticleService} from "../../../services/article/article.service";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.css'
})
export class PageArticleComponent implements OnInit {
  listArticle: Array<ArticleDto> = [];
  errorMsg ='';


  constructor(
    private router : Router,
    private articleService: ArticleService
  ) {}
  nouveauArticle() {
    this.router.navigate(['nouvelarticles']);
  }

  ngOnInit(): void {
    this.findListArticle()
  }

  findListArticle(){
    this.articleService.findAllArticle()
      .subscribe(art => {
        this.listArticle = art;
      })
  }

  handleSuppression(event: any) {
    if(event === "success") {
      this.findListArticle();
    }else{
      this.errorMsg = event
    }
  }
}
