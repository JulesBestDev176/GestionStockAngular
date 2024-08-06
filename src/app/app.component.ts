import { Component } from '@angular/core';
import {RouterModule, RouterOutlet } from '@angular/router';
import { PageLoginComponent } from '../pages/page-login/page-login.component';
import {PageSignupComponent} from "../pages/page-signup/page-signup.component";
import {PageStatistiquesComponent} from "../pages/page-statistiques/page-statistiques.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLoginComponent, RouterModule, PageSignupComponent, PageStatistiquesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionStock';
}
