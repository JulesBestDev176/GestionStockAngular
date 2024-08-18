import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../services/clientFournisseurUser/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-client',
  standalone: true,
  imports: [],
  templateUrl: './detail-client.component.html',
  styleUrl: './detail-client.component.css'
})
export class DetailClientComponent implements OnInit {

  @Input() clientFournisseurDto: any;

  @Input() origin: string = '';

  @Output()
  suppressionResult = new EventEmitter();

  type : string = '';
  errorMsg : string = '';
  listCltFrs : Array<any> = [];



  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    if(this.origin === 'client') {
      this.type = 'client';
    }else {
      this.type = 'fournisseur';
    }
  }

  findAllCltFrs(): void {
    if(this.origin === 'client') {
      this.clientService.findAllClient()
        .subscribe(res => {
          this.listCltFrs = res;
        });
    }else if (this.origin === 'fournisseur') {
      this.clientService.findAllFournisseur()
        .subscribe(res => {
          this.listCltFrs = res;
        });
    }
  }

  modifierClientFournisseur() {
    if(this.origin === 'client') {
      this.router.navigate(['nouveauclient', this.clientFournisseurDto.id])
    }else if(this.origin === 'fournisseur') {
      this.router.navigate(['nouveaufournisseur', this.clientFournisseurDto.id])
    }
  }

  confirmerEtSupprimerCltFrs() {
    if(this.clientFournisseurDto.id) {
      if(this.origin === 'client') {
        this.clientService.deleteClt(this.clientFournisseurDto.id)
          .subscribe({
            next: () => {
              this.suppressionResult.emit('success');
              this.findAllCltFrs();
              this.router.navigate(['clients'])
            },
              error: (error) => {
              this.errorMsg = error.error.errors
              this.suppressionResult.emit(this.errorMsg);
            }
          });

      }else if(this.origin === 'fournisseur') {
        this.clientService.deleteFrs(this.clientFournisseurDto.id)
          .subscribe({
            next: () => {
              this.suppressionResult.emit('success');
              this.findAllCltFrs();
              this.router.navigate(['fournisseurs'])
            },
            error: (error) => {
              this.errorMsg = error.error.errors
              this.suppressionResult.emit(this.errorMsg);
            }
          });

      }

    }
  }
}
