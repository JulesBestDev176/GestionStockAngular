import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BoutonActionAnnulerComponent} from "../../composants/bouton-action-annuler/bouton-action-annuler.component";

@Component({
  selector: 'app-nouvel-clt-frs',
  standalone: true,
  imports: [
    RouterLink,
    BoutonActionAnnulerComponent
  ],
  templateUrl: './nouvel-clt-frs.component.html',
  styleUrl: './nouvel-clt-frs.component.css'
})
export class NouvelCltFrsComponent implements OnInit {

  origin = '';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

}
