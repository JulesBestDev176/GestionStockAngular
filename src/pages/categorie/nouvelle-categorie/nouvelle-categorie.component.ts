import {Component, OnInit} from '@angular/core';
import {BoutonActionAnnulerComponent} from "../../../composants/bouton-action-annuler/bouton-action-annuler.component";
import {CategoryDto} from "../../../model/category-dto";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category/category.service";
import {catchError, throwError} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
  imports: [
    BoutonActionAnnulerComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.css'
})
export class NouvelleCategorieComponent implements OnInit {
  categoryDto: CategoryDto = {};
  errorMsg: Array<string> = [];
  constructor(
    private router : Router,
    private categorieService : CategoryService,
    private activatedRoute: ActivatedRoute

  ) { }
  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if(idCategory) {
      this.categorieService.findByIdCat(idCategory)
        .subscribe(cat => {
          this.categoryDto = cat;
        });
    }
  }

  onSubmit() {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if(idCategory){
      this.categorieService.modifierCategory(idCategory, this.categoryDto)
       .pipe(
          catchError(error => {
            this.errorMsg = error.error.errors;
            return throwError(() => new Error(error.message));
          })
        )
       .subscribe({
          next: () => this.router.navigate(['categories']),
          error: (error) => {
            // Additional error handling if needed
            console.error('Error occurred:', error);
          }
        });
    } else {
      this.categorieService.enregistrerCategory(this.categoryDto)
        .pipe(
          catchError(error => {
            this.errorMsg = error.error.errors;
            return throwError(() => new Error(error.message));
          })
        )
        .subscribe({
          next: () => this.router.navigate(['categories']),
          error: (error) => {
            // Additional error handling if needed
            console.error('Error occurred:', error);
          }
        });
    }
  }

}
