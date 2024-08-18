import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {BoutonActionAnnulerComponent} from "../../composants/bouton-action-annuler/bouton-action-annuler.component";
import {ClientService} from "../../services/clientFournisseurUser/client.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ClientDto} from "../../model/client-dto";
import {AdresseDto} from "../../model/adresse-dto";
import {FournisseurDto} from "../../model/fournisseur-dto";
import {NgForOf, NgIf} from "@angular/common";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-nouvel-clt-frs',
  standalone: true,
  imports: [
    RouterLink,
    BoutonActionAnnulerComponent,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './nouvel-clt-frs.component.html',
  styleUrl: './nouvel-clt-frs.component.css'
})
export class NouvelCltFrsComponent implements OnInit {

  origin = '';
  clientFournisseur : any = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  clientFournisseurForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.clientFournisseurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse1: ['', Validators.required],
      adresse2: ['', Validators.required],
      ville: ['', Validators.required],
      code_postal: ['', Validators.required],
      pays: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

  enregistrerCltFrsUt() {
    const formValue = this.clientFournisseurForm.value;
   if (this.origin === 'client') {
     this.clientService.enregistrerClient(this.mapToClient(formValue))
       .subscribe({
          next: () => {
            this.router.navigate(['clients']);
          } ,
          error: err => {
            this.errorMsg = err.error.errors;
          }
       });
   }else if(this.origin === 'fournisseur') {
     this.clientService.enregistrerFournisseur(this.mapToFournisseur(formValue))
       .subscribe({
          next: () => this.router.navigate(['fournisseurs']),
          error: err => {
            this.errorMsg = err.error.errors;
          }
       });
   }
  }

  mapToClient(formValue: any): ClientDto {
    return {
      nom: formValue.nom,
      prenom: formValue.prenom,
      mail: formValue.email,
      numTel: formValue.telephone,
      idEntreprise: this.authService.getUser()?.id,
      adresse: this.mapToAdresse(formValue)
    };
  }

  mapToFournisseur(formValue: any): FournisseurDto {
    return {
      nom: formValue.nom,
      prenom: formValue.prenom,
      mail: formValue.email,
      numTel: formValue.telephone,
      idEntreprise: this.authService.getUser()?.id,
      adresse: this.mapToAdresse(formValue)
    };
  }

  mapToAdresse(formValue: any) : AdresseDto {
    return {
      adresse1: formValue.adresse1,
      adresse2: formValue.adresse2,
      ville: formValue.ville,
      codePostale: formValue.code_postal,
      pays: formValue.pays
    };
  }



}
