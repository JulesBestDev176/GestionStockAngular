import {Component, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {DetailCmdCltFrsComponent} from "../../composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component";
import {DetailCmdComponent} from "../../composants/detail-cmd/detail-cmd.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CommandeCltFrsService} from "../../services/commandeCltFrs/commande-clt-frs.service";
import {CommandeClientDto} from "../../model/commande-client-dto";
import {NgForOf, NgIf} from "@angular/common";
import {LigneCommandeClientDto} from "../../model/ligne-commande-client-dto";

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: true,
  imports: [
    BoutonActionComponent,
    PaginationComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.css'
})
export class PageCmdCltFrsComponent implements  OnInit {
  origin = '';
  listeCommandes: Array<any> = [];
  mapLignesCommande = new Map();
  mapPrixTotalCommande = new Map();
  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private cmdCltFrsService: CommandeCltFrsService
  ) {}
  nouvelleCommande() {
    if(this.origin === 'client') {
      this.router.navigate(['nouvellecommandeclt']);
    } else if(this.origin === 'fournisseur') {
      this.router.navigate(['nouvellecommandefrs']);
    }

  }

  findAllCommandes(): void {
    if(this.origin === 'client') {
      this.cmdCltFrsService.findAllCommandesClient()
        .subscribe(cmd => {
          this.listeCommandes = cmd;
          this.findAllLignesCommande();
        })
    }else if(this.origin === 'fournisseur') {
      this.cmdCltFrsService.findAllCommandesFournisseur()
        .subscribe(cmd => {
          this.listeCommandes = cmd;
          this.findAllLignesCommande();
        })
    }
  }

  findAllLignesCommande(): void {
    this.listeCommandes.forEach(cmd => {
      this.findLignesCommande(cmd.id);
    });
  }

  calculerTotalCommande(id?: string): number {
    return this.mapPrixTotalCommande.get(id);
  }

  findLignesCommande(idCommande?: string): void {
    if (this.origin === 'client') {
      this.cmdCltFrsService.findAllLigneCommandesClient(idCommande)
        .subscribe(list => {
          this.mapLignesCommande.set(idCommande, list);
          this.mapPrixTotalCommande.set(idCommande, this.calculerTatalCmd(list));
        });
    } else if (this.origin === 'fournisseur') {
      this.cmdCltFrsService.findAllLigneCommandesFournisseur(idCommande)
        .subscribe(list => {
          this.mapLignesCommande.set(idCommande, list);
          this.mapPrixTotalCommande.set(idCommande, this.calculerTatalCmd(list));
        });
    }
  }

  calculerTatalCmd(list: Array<any>): number {
    let total = 0;
    list.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        total += +ligne.quantite * +ligne.prixUnitaire;
      }
    });
    return Math.floor(total);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin']
    })
    this.findAllCommandes();
  }
}
