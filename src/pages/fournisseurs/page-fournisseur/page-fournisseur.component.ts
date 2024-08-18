import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailClientComponent} from "../../../composants/detail-client/detail-client.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {ClientService} from "../../../services/clientFournisseurUser/client.service";
import {FournisseurDto} from "../../../model/fournisseur-dto";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
  imports: [
    BoutonActionComponent,
    DetailClientComponent,
    PaginationComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.css'
})
export class PageFournisseurComponent implements OnInit {
  listFournisseur: Array<FournisseurDto> = [];
  errorMsg ='';
  constructor(
    private router: Router,
    private clientService : ClientService
  ) {}
  nouveauFournisseur() {
    this.router.navigate(['nouveaufournisseur']);
  }

  ngOnInit(): void {
    this.findListFournisseur();
  }

  findListFournisseur() {
    this.clientService.findAllFournisseur()
      .subscribe(fournisseur => {
        this.listFournisseur = fournisseur;
      });
  }

  handleSuppression(event: any) {
    if(event === "success") {
      this.findListFournisseur();
    }else{
      this.errorMsg = event
    }
  }
}
