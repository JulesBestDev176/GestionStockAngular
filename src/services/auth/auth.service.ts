import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {map, Observable, switchMap, tap} from "rxjs";
import {AuthResponse} from "../../model/auth-response";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:3000/utilisateur";
  errorMsg ='';
  public user: UserModel | null = null;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //isAuthenticated(): boolean {
  //return!!this.getToken();
  //}

  registration(user: UserModel): Observable<AuthResponse>{
    return this.http.post<UserModel>(this.baseUrl, user).pipe(
      map((newUser:UserModel)=>{
        const token=btoa(`${newUser.email}${newUser.password}`);
        const credentials = {email : user.email, password : 'okok'};
        this.login(credentials).subscribe(response => {
          localStorage.setItem('origin', 'inscription')
          this.router.navigate(['/changermdp']);
        });
        return { token, user: newUser} as AuthResponse;


      })
    )
  }



  login(credentials: {email: string, password: string}) : Observable<AuthResponse> {
    let params = new HttpParams();
    params = params.append('email', credentials.email);
    params = params.append('password', credentials.password);

    return this.http.get<UserModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if(users.length > 0) {
          const user = users[0];
          if(user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user)); // Stocke les informations de l'utilisateur dans localStorage
            localStorage.setItem('token', token); // Stocke le token
            return { token, user } as AuthResponse;
          }else {
            this.errorMsg = 'Mot de passe incorrect';
            throw new Error(this.errorMsg);
          }

        } else {
          this.errorMsg = 'Login et / ou mot de passe incorrect';
          throw new Error(this.errorMsg);
        }
      })
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUser(): UserModel | null {
    const userJson = localStorage.getItem('user');

    if (userJson) {
      try {
        const user: UserModel = JSON.parse(userJson);
        return user;
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
        return null;
      }
    }

    return null;
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isUserLoggedAndAccessTokenValid() {
    if(localStorage.getItem('token')) {
      //TODO: il faut verifier si le access token est valide
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  changerMotDePasse(id: string, ancienMotDePasse: string, nouveauMotDePasse: string): Observable<any> {
    // Récupérez d'abord les données complètes de l'utilisateur
    return this.getUserById(id).pipe(
      switchMap(user => {
        if (user.password === ancienMotDePasse) {
          // Conservez les autres données et mettez à jour uniquement le mot de passe
          const updatedUser = { ...user, password: nouveauMotDePasse };
          return this.http.put(`${this.baseUrl}/${id}`, updatedUser);
        } else {
          this.errorMsg = 'Ancien mot de passe incorrect';
          throw new Error(this.errorMsg);
        }
      })
    );
  }




  getUserById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/${id}`);
  }




  getById(id : string) : Observable<any> {
    return this.http.get(this.baseUrl + "/" + id)
  }


}
