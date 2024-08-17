import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleDto} from "../../../model/article-dto";
import {CategoryService} from "../../../services/category/category.service";
import {CategoryDto} from "../../../model/category-dto";
import {Router} from "@angular/router";
import {ArticleService} from "../../../services/article/article.service";

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.css'
})
export class DetailArticleComponent implements OnInit {
  @Input()
  articleDto: ArticleDto = {};

  @Output()
  suppressionResult = new EventEmitter();

  categoryDto: CategoryDto = {};
  errorsMsg= '';
  listArticle: Array<ArticleDto> = [];

  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService,  // Assuming ArticleService is a service to fetch and manage articles
    private router: Router,  // Assuming Router is a service to navigate between pages
  ) {
  }
  ngOnInit(): void {
    const categoryId = this.articleDto.category?.id;
    if (categoryId) {
      this.categoryService.findByIdCat(categoryId)
        .subscribe(category => {
          this.categoryDto = category;
        });
    }else{
      console.log('category not found');
    }
  }


  modifierArticle(id: string | undefined) {
    this.router.navigate(['nouvelarticles',id])
  }



  findAllArt(): void {
    this.articleService.findAllArticle()
      .subscribe(res => {
        this.listArticle = res;
      });
  }


  confirmerEtSupprimerArt() {
    if(this.articleDto.id) {
      this.articleService.deleteArt(this.articleDto.id)
        .subscribe({
          next: () => {
            this.suppressionResult.emit("success");
            this.findAllArt()

          },
          error: (error) => {
            this.errorsMsg = error.error.errors
            this.suppressionResult.emit(this.errorsMsg);
          }
        })
    }
  }
}
