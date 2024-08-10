import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-bouton-action',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.css'
})
export class BoutonActionComponent implements OnInit {
  @Input()
  isNouveauVisible = true;
  @Input()
  isImportVisible = true;
  @Input()
  isExportVisible = true;
  @Output()
  clickEvent = new EventEmitter()
  ngOnInit(): void {
  }

  boutonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
