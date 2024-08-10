import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {DetailCmdCltFrsComponent} from "../../composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component";
import {DetailCmdComponent} from "../../composants/detail-cmd/detail-cmd.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: true,
  imports: [
    BoutonActionComponent,
    PaginationComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent
  ],
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.css'
})
export class PageCmdCltFrsComponent implements  OnInit {
  constructor(
    private router : Router
  ) {}
  nouvelleCommande() {
    this.router.navigate(['nouvellecommandeclt']);
  }

  ngOnInit(): void {
  }
}
