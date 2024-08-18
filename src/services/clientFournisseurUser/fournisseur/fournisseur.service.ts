import { Injectable } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {BaseService} from "../../../services/base-service";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {StrictHttpResponse} from "../../../services/strict-http-response";
import {FournisseurDto} from "../../../model/fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseUrl: string = "http://localhost:3000/fournisseurs";

  constructor(
    private authService: AuthService,
    private base: BaseService,
    private http: HttpClient,
    private router: Router
  ) { }

  findAllResponse(): Observable<StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.base._rootUrl + this.baseUrl,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  findAll(): Observable<Array<FournisseurDto>> {
    return this.findAllResponse().pipe(
      map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  saveResponse(body?: FournisseurDto): Observable<StrictHttpResponse<FournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.base._rootUrl + this.baseUrl,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<FournisseurDto>;
      })
    );
  }

  save(body?: FournisseurDto): Observable<FournisseurDto> {
    return this.saveResponse(body).pipe(
      map(_r => _r.body as FournisseurDto)
    );
  }


  deleteResponse(idFournisseur: string): Observable<StrictHttpResponse<null>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      `${this.base._rootUrl}${this.baseUrl}/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }

  delete(idFournisseur: string): Observable<null> {
    return this.deleteResponse(idFournisseur).pipe(
      map(_r => _r.body as null)
    );
  }


  findByIdResponse(idFournisseur: string): Observable<StrictHttpResponse<FournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<FournisseurDto>;
      })
    );
  }

  findById(idFournisseur: string): Observable<FournisseurDto> {
    return this.findByIdResponse(idFournisseur).pipe(
      map(_r => _r.body as FournisseurDto)
    );
  }

  modifierFournisseur(idFournisseur: string, fournisseurDto: FournisseurDto) {
    return this.updateResponse(idFournisseur, fournisseurDto).pipe(
      map(_r => _r.body as FournisseurDto)
    );
  }

  private updateResponse(idFournisseur: string, fournisseurDto: FournisseurDto) {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = fournisseurDto;
    let req = new HttpRequest<any>(
      'PUT',
      `${this.base._rootUrl}${this.baseUrl}/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<FournisseurDto>;
      })
    );

  }
}
