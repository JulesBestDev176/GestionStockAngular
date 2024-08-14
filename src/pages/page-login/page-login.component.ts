import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {
  loginForm!: FormGroup;
  errorMsg ='';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(){
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          console.log("Utilisateur connectés avec succés", res);
          this.authService.storeToken(res.token);
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error("Erreur lors de la connexion", err);
          this.errorMsg = "Login ou mot de passe incorrect"
          this.errorMsg = this.authService.errorMsg;
        }
      });
    }else{
      alert("ya probleme")
    }
  }

}
