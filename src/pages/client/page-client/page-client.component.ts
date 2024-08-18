import {Component, Input, OnInit} from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {DetailClientComponent} from "../../../composants/detail-client/detail-client.component";
import {Router} from "@angular/router";
import {ClientService} from "../../../services/clientFournisseurUser/client.service";
import {ClientDto} from "../../../model/client-dto";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    BoutonActionComponent,
    PaginationComponent,
    DetailClientComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.css'
})
export class PageClientComponent implements OnInit {

  listClient: Array<ClientDto> = [];
  errorMsg ='';
  constructor(
    private router : Router,
    private clientService : ClientService
  ) {}
  nouveauClient() {
    this.router.navigate(['nouveauclient']);
  }

  ngOnInit(): void {
    this.findListClient();
  }

  findListClient() {
    this.clientService.findAllClient()
      .subscribe(client => {
        this.listClient = client;
      });
  }

  handleSuppression(event: any) {
    if(event === "success") {
      this.findListClient();
    }else{
      this.errorMsg = event
    }
  }
}
