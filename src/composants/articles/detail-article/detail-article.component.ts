import {Component, Input, OnInit} from '@angular/core';
import {ArticleDto} from "../../../model/article-dto";
import {CategoryService} from "../../../services/category/category.service";
import {CategoryDto} from "../../../model/category-dto";
import {Router} from "@angular/router";

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

  categoryDto: CategoryDto = {};

  constructor(
    private categoryService: CategoryService,
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

  selectArticlePourSupprimer(id: string | undefined) {

  }
}
