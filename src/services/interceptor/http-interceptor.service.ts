import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthResponse} from "../../model/auth-response";
import {LoaderService} from "../../composants/loader/service/loader.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
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
      return this.handleRequest(authRequ, next);
    } else {
      return this.handleRequest(req, next); // Requête originale sans modification si pas de token
    }

  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService.hide();
        }
      }, (err: any) => {
        this.loaderService.hide();
      }));
  }
}
