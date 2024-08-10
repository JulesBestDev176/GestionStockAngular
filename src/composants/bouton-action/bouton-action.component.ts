import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-bouton-action',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.css'
})
export class BoutonActionComponent implements OnInit {
  @Output()
  clickEvent = new EventEmitter()
  ngOnInit(): void {
  }

  boutonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
