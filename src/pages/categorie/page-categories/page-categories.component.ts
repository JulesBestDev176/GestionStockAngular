import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {CategoryDto} from "../../../model/category-dto";
import {CategoryService} from "../../../services/category/category.service";
import {NgForOf, NgIf} from "@angular/common";
import {ArticleService} from "../../../services/article/article.service";

@Component({
  selector: 'app-page-categories',
  standalone: true,
  imports: [
    BoutonActionComponent,
    PaginationComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.css'
})
export class PageCategoriesComponent implements OnInit {
  listCategories : Array<CategoryDto> = [];
  selectedCategoryIdToDelete: string | undefined = "";
  errorsMsg= '';
  constructor(
    private router: Router,
    private categoryService : CategoryService ,
    private articleService : ArticleService
  ) {}
  nouvelleCategorie() {
    this.router.navigate(['nouvellecategorie']);
  }

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories(): void {
    this.categoryService.findAllCat()
      .subscribe(res => {
        this.listCategories = res;
      });
  }

  modifierCategory(id: string | undefined) {
    this.router.navigate(['nouvellecategorie',id])
  }

  confirmerEtSupprimerCat() {

    if (this.selectedCategoryIdToDelete != "") {
      if(this.selectedCategoryIdToDelete) {
        if(this.articleService.findCatArticle(this.selectedCategoryIdToDelete)) {
          this.errorsMsg = "Impossible de supprimer cette categorie qui est déjà utilisée";
          return;
        }
      }
      this.categoryService.deleteCat(this.selectedCategoryIdToDelete)
        .subscribe({
          next: () => this.findAllCategories(),
          error: (error) => {
            this.errorsMsg = error.error.errors
          }
        })
    }
  }

  annulerSuppressionCat() {
    this.selectedCategoryIdToDelete = "";
  }

  selectCategoriePourSupprimer(id: string | undefined) {
    this.selectedCategoryIdToDelete = id;
  }
}
