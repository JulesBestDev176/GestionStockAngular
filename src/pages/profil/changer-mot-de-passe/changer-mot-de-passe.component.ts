import { Component, OnInit } from '@angular/core';
import { BoutonActionAnnulerComponent } from "../../../composants/bouton-action-annuler/bouton-action-annuler.component";
import { AuthService } from "../../../services/auth/auth.service";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { UserModel } from "../../../model/user.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
  imports: [
    BoutonActionAnnulerComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.css']
})
export class ChangerMotDePasseComponent implements OnInit {
  changerMotDePasseForm: FormGroup;
  public ancienMotDePasse: string | undefined;
  user: UserModel | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.changerMotDePasseForm = this.fb.group({
      ancienMotDePasse: ['', Validators.required],
      nouveauMotDePasse: ['', [Validators.required, Validators.minLength(6)]],
      confirmeMotDePasse: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      console.error('Utilisateur non trouvé dans localStorage');
      this.router.navigate(['/login']);
    }
    if (localStorage.getItem('origin') === 'inscription') {
      this.changerMotDePasseForm.patchValue({
        ancienMotDePasse: 'okok'
      });
      localStorage.removeItem('origin');
    }


  }

  changerMotDePasse() {
    if (this.changerMotDePasseForm.valid) {
      const { ancienMotDePasse, nouveauMotDePasse } = this.changerMotDePasseForm.value;
      if (this.user) {
        this.authService.changerMotDePasse(this.user.id, ancienMotDePasse, nouveauMotDePasse)
          .subscribe({
            next: () => {
              if (this.user instanceof UserModel) {
                this.user.password = nouveauMotDePasse;
              }

              this.router.navigate(['/profils']);
              localStorage.removeItem('user');
              localStorage.setItem('user', JSON.stringify(this.user));
              console.log('LocalStorage:', localStorage.getItem('user'));
            },
            error: err => {
              console.error('Erreur lors du changement de mot de passe:', err);
            }
          });
      } else {
        alert('Aucun User');
      }
    }
  }

  passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): { [key: string]: boolean } | null => {
    const { value: nouveauMotDePasse } = formGroup.get('nouveauMotDePasse') || { value: '' };
    const { value: confirmeMotDePasse } = formGroup.get('confirmeMotDePasse') || { value: '' };

    return nouveauMotDePasse === confirmeMotDePasse ? null : { passwordMismatch: true };
  }
}
