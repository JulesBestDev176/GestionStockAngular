import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {DetailUtilisateurComponent} from "../../../composants/detail-utilisateur/detail-utilisateur.component";

@Component({
  selector: 'app-page-utilisateur',
  standalone: true,
  imports: [
    BoutonActionComponent,
    PaginationComponent,
    DetailUtilisateurComponent
  ],
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.css'
})
export class PageUtilisateurComponent implements OnInit {
  constructor(
    private router: Router
  ) {
  }
  nouvelUtilisateur() {
    this.router.navigate(['nouvelutilisateur']);
  }

  ngOnInit(): void {
  }
}
