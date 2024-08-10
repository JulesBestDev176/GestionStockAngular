import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-categories',
  standalone: true,
    imports: [
        BoutonActionComponent,
        PaginationComponent
    ],
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.css'
})
export class PageCategoriesComponent implements OnInit {
  constructor(
    private router: Router
  ) {}
  nouvelleCategorie() {
    this.router.navigate(['nouvellecategorie']);
  }

  ngOnInit(): void {
  }
}
