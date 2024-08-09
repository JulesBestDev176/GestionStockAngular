import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailClientComponent} from "../../../composants/detail-client/detail-client.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
    imports: [
        BoutonActionComponent,
        DetailClientComponent,
        PaginationComponent
    ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.css'
})
export class PageFournisseurComponent {

}
