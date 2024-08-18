import { Injectable } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {BaseService} from "../../../services/base-service";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {StrictHttpResponse} from "../../../services/strict-http-response";
import {ClientDto} from "../../../model/client-dto";

@Injectable({
  providedIn: 'root'
})
export class ClientSService {

  private baseUrl: string = "http://localhost:3000/clients";

  constructor(
    private authService: AuthService,
    private base: BaseService,
    private http: HttpClient,
    private router: Router
  ) { }

  findAllResponse(): Observable<StrictHttpResponse<Array<ClientDto>>> {
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
        return _r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  findAll(): Observable<Array<ClientDto>> {
    return this.findAllResponse().pipe(
      map(_r => _r.body as Array<ClientDto>)
    );
  }

  saveResponse(body?: ClientDto): Observable<StrictHttpResponse<ClientDto>> {
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
        return _r as StrictHttpResponse<ClientDto>;
      })
    );
  }

  save(body?: ClientDto): Observable<ClientDto> {
    return this.saveResponse(body).pipe(
      map(_r => _r.body as ClientDto)
    );
  }

  modifierClient(idClient: string, clientDto: ClientDto) {
    return this.updateResponse(idClient, clientDto).pipe(
      map(_r => _r.body as ClientDto)
    );
  }

  private updateResponse(idClient: string, clientDto: ClientDto) {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = clientDto;
    let req = new HttpRequest<any>(
      'PUT',
      `${this.base._rootUrl}${this.baseUrl}/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<ClientDto>;
      })
    );

  }


  deleteResponse(idClient: string): Observable<StrictHttpResponse<null>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      `${this.base._rootUrl}${this.baseUrl}/${idClient}`,
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

  delete(idClient: string): Observable<null> {
    return this.deleteResponse(idClient).pipe(
      map(_r => _r.body as null)
    );
  }


  findByIdResponse(idClient: string): Observable<StrictHttpResponse<ClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<ClientDto>;
      })
    );
  }

  findById(idClient: string): Observable<ClientDto> {
    return this.findByIdResponse(idClient).pipe(
      map(_r => _r.body as ClientDto)
    );
  }
}
