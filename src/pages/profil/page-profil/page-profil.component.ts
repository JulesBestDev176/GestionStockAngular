import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserModel} from "../../../model/user.model";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-page-profil',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.css'
})
export class PageProfilComponent implements OnInit {

  user : UserModel | undefined = undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      console.error('Utilisateur non trouvé dans localStorage');
      this.router.navigate(['/login']);
    }
  }

}
