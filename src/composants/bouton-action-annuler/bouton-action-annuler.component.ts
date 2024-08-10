import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bouton-action-annuler',
  standalone: true,
  imports: [],
  templateUrl: './bouton-action-annuler.component.html',
  styleUrl: './bouton-action-annuler.component.css'
})
export class BoutonActionAnnulerComponent implements OnInit {
  origin = '';
  direction = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin']
      this.direction = data['direction']
    });
  }

  cancelClick(): void {
    if (this.origin === 'client' && this.direction == null) {
      this.router.navigate(['clients']);
    } else if (this.origin === 'fournisseur'  && this.direction == null) {
      this.router.navigate(['fournisseurs']);
    }else if(this.origin === 'utilisateur' && this.direction == null) {
      this.router.navigate(['utilisateurs']);
    }else if(this.direction === 'commandeclient') {
      this.router.navigate(['commandesclients']);
    }else if(this.direction === 'commandefrs') {
      this.router.navigate(['commandesfournisseurs']);
    }else if(this.direction === 'article') {
      this.router.navigate(['articles']);
    }else if(this.direction === 'categorie') {
      this.router.navigate(['categories']);
    }else if(this.direction === 'profil') {
      this.router.navigate(['profils']);
    }
  }

  saveClick() {

  }
}
