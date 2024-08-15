import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthResponse} from "../../model/auth-response";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    let authResponse: AuthResponse | null = null;
    if (localStorage.getItem('token')) {
      authResponse = JSON.parse(
        localStorage.getItem('token') as string
      );
    }
    if (authResponse && authResponse.token) {
      const authRequ = req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${authResponse.token}`
        })
      });
      return next.handle(authRequ);
    } else {
      return next.handle(req); // Requête originale sans modification si pas de token
    }

  }
}
