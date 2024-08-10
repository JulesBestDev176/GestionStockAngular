import { Component } from '@angular/core';
import {BoutonActionAnnulerComponent} from "../../../composants/bouton-action-annuler/bouton-action-annuler.component";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
  imports: [
    BoutonActionAnnulerComponent
  ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.css'
})
export class ChangerMotDePasseComponent {

}
