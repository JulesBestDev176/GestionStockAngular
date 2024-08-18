import {Injectable, OnInit} from '@angular/core';
import {ClientDto} from "../../model/client-dto";
import {AuthService} from "../../services/auth/auth.service";
import {Observable, of} from "rxjs";
import {FournisseurService} from "./fournisseur/fournisseur.service";
import {ClientSService} from "./clientS/client-s.service";
import {FournisseurDto} from "../../model/fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit {

  client: ClientDto | undefined;
  constructor(
    private authService: AuthService,
    private clientService: ClientSService,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
  }

  enregistrerClient(clientDto: ClientDto): Observable<ClientDto> {
    clientDto.idEntreprise = this.authService.getUser()?.id;
    return this.clientService.save(clientDto)
  }

  enregistrerFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    fournisseurDto.idEntreprise = this.authService.getUser()?.id;
    return this.fournisseurService.save(fournisseurDto)
  }

  findAllClient(): Observable<ClientDto[]> {
    return this.clientService.findAll();
  }

  findAllFournisseur(): Observable<FournisseurDto[]> {
    return this.fournisseurService.findAll();
  }

  deleteClient(idClient: string): Observable<any> {
    if(idClient) {
      return this.clientService.delete(idClient);
    }
    return of();
  }

  deleteFournisseur(idFournisseur: string): Observable<any> {
    if(idFournisseur) {
      return this.clientService.delete(idFournisseur);
    }
    return of();
  }

  findClientById(idClient: string): Observable<ClientDto> {
    if(idClient){
      return this.clientService.findById(idClient);
    }
    return of();
  }

  findFournisseurById(idFournisseur: string): Observable<FournisseurDto> {
    if(idFournisseur){
      return this.fournisseurService.findById(idFournisseur);
    }
    return of();
  }


  // autres




}
