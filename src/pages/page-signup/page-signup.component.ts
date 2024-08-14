import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {UserModel} from "../../model/user.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-page-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './page-signup.component.html',
  styleUrl: './page-signup.component.css'
})
export class PageSignupComponent {
  regForm!: FormGroup;
  errorMsg ='';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.regForm = this.formBuilder.group({

      nom: ['', Validators.required],
      code_fiscale: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse1: ['', Validators.required],
      adresse2: ['', Validators.required],
      ville: ['', Validators.required],
      code_postal: ['', Validators.required],
      pays: ['', Validators.required],
      password: ['', [Validators.required, Validators.max(20), Validators.min(4)]]

    })
  }

  onSubmit(){
    if (this.regForm.valid) {
      const user: UserModel = this.regForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log("Utilisateur inscris avec succés", res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error("Erreur lors de l'inscription", err);
        }
      });
    }else{
      alert("ya probleme")
    }
  }
}
