import {Component, OnInit} from '@angular/core';
import {DetailCmdComponent} from "../detail-cmd/detail-cmd.component";
import {ActivatedRoute} from "@angular/router";
import {BoutonActionAnnulerComponent} from "../../composants/bouton-action-annuler/bouton-action-annuler.component";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  standalone: true,
  imports: [
    DetailCmdComponent,
    BoutonActionAnnulerComponent
  ],
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.css'
})
export class NouvelleCmdCltFrsComponent implements OnInit {
  origin='';
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin']
    })
  }

}
