import { Component } from '@angular/core';
import {BoutonActionAnnulerComponent} from "../../../composants/bouton-action-annuler/bouton-action-annuler.component";

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
  imports: [
    BoutonActionAnnulerComponent
  ],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.css'
})
export class NouvelleCategorieComponent {

}
