import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MenuComponent} from "../../composants/menu/menu.component";
import {HeaderComponent} from "../../composants/header/header.component";
import {LoaderComponent} from "../../composants/loader/loader.component";

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    HeaderComponent,
    HeaderComponent,
    LoaderComponent
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css'
})
export class PageDashboardComponent {

}
