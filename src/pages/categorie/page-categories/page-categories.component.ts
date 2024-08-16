import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {CategoryDto} from "../../../model/category-dto";
import {CategoryService} from "../../../services/category/category.service";
import {NgForOf, NgIf} from "@angular/common";

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
  constructor(
    private router: Router,
    private categoryService : CategoryService // Assuming CategoryService is a service to fetch categories
  ) {}
  nouvelleCategorie() {
    this.router.navigate(['nouvellecategorie']);
  }

  ngOnInit(): void {
    this.categoryService.findAllCat()
     .subscribe(res => {
       this.listCategories = res;
     });
  }

  modifierCategory(id: string | undefined) {
    this.router.navigate(['nouvellecategorie',id])
  }
}
