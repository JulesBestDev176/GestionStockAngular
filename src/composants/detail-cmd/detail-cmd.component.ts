import {Component, Input, OnInit} from '@angular/core';
import {LigneCommandeClientDto} from "../../model/ligne-commande-client-dto";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-detail-cmd',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './detail-cmd.component.html',
  styleUrl: './detail-cmd.component.css'
})
export class DetailCmdComponent implements OnInit {
  @Input()
  ligneCommande: LigneCommandeClientDto  = {} as LigneCommandeClientDto;
  constructor() {
  }
  ngOnInit(): void {
  }


}
