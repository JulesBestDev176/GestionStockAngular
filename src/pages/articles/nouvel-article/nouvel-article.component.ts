import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {BoutonActionAnnulerComponent} from "../../../composants/bouton-action-annuler/bouton-action-annuler.component";

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [
    RouterLink,
    BoutonActionAnnulerComponent
  ],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.css'
})
export class NouvelArticleComponent {

}
