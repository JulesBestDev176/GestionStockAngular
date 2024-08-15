import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {AuthService} from "../../services/auth/auth.service";
import {NgIf, NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  connectedUser: UserModel | null = null;

  constructor(
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.connectedUser = this.authService.getUser() ;
  }
}
