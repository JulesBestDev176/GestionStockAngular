import {Component, Input, OnInit} from '@angular/core';
import {CommandeClientDto} from "../../model/commande-client-dto";
import {ClientDto} from "../../model/client-dto";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-detail-cmd-clt-frs',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrl: './detail-cmd-clt-frs.component.css'
})
export class DetailCmdCltFrsComponent implements OnInit {
  @Input()
  origin = '';
  @Input()
  commande: CommandeClientDto = {};
  cltFrs: ClientDto | undefined = {};
  constructor() {
  }
  ngOnInit(): void {
    this.extractCltFrs();
  }

  extractCltFrs(): void {
    if(this.origin === 'client') {
      this.cltFrs = this.commande.client;
    }else if(this.origin === 'fournisseur') {
      //this.cltFrs = this.commande.fournisseur;
    }
  }
}
