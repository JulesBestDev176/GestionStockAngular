import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {catchError, map, Observable, throwError} from "rxjs";
import {AuthResponse} from "../../model/auth-response";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:3000/utilisateur";
  errorMsg =''
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
            return { token, user } as AuthResponse;
          }else {
            this.errorMsg = 'Mot de passe incorrect';
            throw new Error(this.errorMsg);
          }

        } else {
          this.errorMsg = 'Utilisateur non trouvés';
          throw new Error(this.errorMsg);
        }
      }),
      catchError(error => {
        // Propager l'erreur avec un Observable<never>
        return throwError(() => new Error(this.errorMsg));
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
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

}
