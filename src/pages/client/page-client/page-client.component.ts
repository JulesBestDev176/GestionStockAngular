import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {DetailClientComponent} from "../../../composants/detail-client/detail-client.component";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    BoutonActionComponent,
    PaginationComponent,
    DetailClientComponent
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.css'
})
export class PageClientComponent {

}
