import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {DetailClientComponent} from "../../../composants/detail-client/detail-client.component";
import {Router} from "@angular/router";

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
export class PageClientComponent implements OnInit {

  constructor(
    private router : Router
  ) {}
  nouveauClient() {
    this.router.navigate(['nouveauclient']);
  }

  ngOnInit(): void {
  }
}
