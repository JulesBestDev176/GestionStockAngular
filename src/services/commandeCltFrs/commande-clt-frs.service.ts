import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CommandeClientDto} from "../../model/commande-client-dto";
import {AuthService} from "../../services/auth/auth.service";
import {CommandeClientService} from "../../services/commandeCltFrs/client/commande-client.service";
import {CommandeFournisseurService} from "../../services/commandeCltFrs/fournisseur/commande-fournisseur.service";
import {CommandeFournisseurDto} from "../../model/commande-fournisseur-dto";
import {LigneCommandeClientDto} from "../../model/ligne-commande-client-dto";
import {LigneCommandeFournisseurDto} from "../../model/ligne-commande-fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class CommandeCltFrsService {

  constructor(
    private authService: AuthService,
    private commandeClientService: CommandeClientService,
    private commandeFournisseurService: CommandeFournisseurService,
  ) { }

  enregistrerCommandeClient(commandeClient: CommandeClientDto): Observable<CommandeClientDto> {
    commandeClient.idEntreprise = this.authService.getUser()?.id;
    return this.commandeClientService.save(commandeClient);
  }

  enregistrerCommandeFournisseur(commandeFournisseurDto: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    commandeFournisseurDto.idEntreprise = this.authService.getUser()?.id;
    return this.commandeFournisseurService.save(commandeFournisseurDto);
  }

  findAllCommandesClient(): Observable<CommandeClientDto[]> {
    return this.commandeClientService.findAll();
  }

  findAllCommandesFournisseur(): Observable<CommandeFournisseurDto[]> {
    return this.commandeFournisseurService.findAll();
  }

  findAllLigneCommandesClient(idCmd?: string): Observable<LigneCommandeClientDto[]> {
    if (idCmd) {
      return this.commandeClientService.findAllLignesCommandesClientByCommandeClientId(idCmd);
    }
    return of();
  }

  findAllLigneCommandesFournisseur(idCmd?: string): Observable<LigneCommandeFournisseurDto[]> {
    if (idCmd) {
      return this.commandeFournisseurService.findAllLignesCommandesFournisseurByCommandeFournisseurId(idCmd);
    }
    return of();
  }
}
