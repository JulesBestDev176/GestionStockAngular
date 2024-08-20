import {Component, OnInit} from '@angular/core';
import {DetailCmdComponent} from "../detail-cmd/detail-cmd.component";
import {ActivatedRoute} from "@angular/router";
import {BoutonActionAnnulerComponent} from "../../composants/bouton-action-annuler/bouton-action-annuler.component";
import {AuthService} from "../../services/auth/auth.service";
import {UserModel} from "../../model/user.model";
import {ClientDto} from "../../model/client-dto";
import {ClientService} from "../../services/clientFournisseurUser/client.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ArticleDto} from "../../model/article-dto";
import {ArticleService} from "../../services/article/article.service";
import {LigneCommandeClientDto} from "../../model/ligne-commande-client-dto";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  standalone: true,
  imports: [
    DetailCmdComponent,
    BoutonActionAnnulerComponent,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.css'
})
export class NouvelleCmdCltFrsComponent implements OnInit {
  origin='';
  user: UserModel | null = null;
  selectedClientFournisseur: ClientDto = {};
  listCltFrs: Array<any> = [];
  searchedArticle: ArticleDto = {};
  errorMsg: string ="";
  codeArticle = '';
  quantite= '';
  lignesCommandes: Array<LigneCommandeClientDto> = [];
  totalCommande: number = 0;

  constructor(
    private activatedRoute : ActivatedRoute,
    private authService: AuthService,
    private clientFournisseurService: ClientService,
    private articleService: ArticleService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin']
    })
    this.user = this.authService.getUser();
    if(this.origin === 'client') {
      this.clientFournisseurService.findAllClient()
        .subscribe(client => {
          this.listCltFrs = client;
        });
    }else if(this.origin === 'fournisseur') {
      this.clientFournisseurService.findAllFournisseur()
       .subscribe(fournisseur => {
          this.listCltFrs = fournisseur;
        });
    }

    this.sommeTotal();


  }

  findArticleByCode(code: string): void {
    if (code) {
      this.articleService.findArticleByCode(code)
        .subscribe({
          next: (article :ArticleDto) => {
            this.searchedArticle = article;
          },
          error: (error) => {
            this.errorMsg = error;
          }
        });
    }
  }

  searchArticle(): void {
    this.errorMsg = '';
    this.searchedArticle = {};
    this.findArticleByCode(this.codeArticle);
  }

  ajouterLigneDeCommande() {
    const ligneCmd : LigneCommandeClientDto = {
      article: this.searchedArticle,
      quantite: parseInt(this.quantite),
      prixUnitaire: this.searchedArticle.prixUnitaireTtc,
      idEntreprise: this.authService.getUser()?.id,
    }
    this.lignesCommandes.push(ligneCmd);
    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.sommeTotal();
  }

  sommeTotal(): void {
    if(this.lignesCommandes.length > 0) {
      this.totalCommande = this.lignesCommandes.reduce((acc, ligne) => {
        const total = (ligne.prixUnitaire || 0)  * (ligne.quantite || 0);
        return acc + total;
      }, 0);
    }
  }


}
