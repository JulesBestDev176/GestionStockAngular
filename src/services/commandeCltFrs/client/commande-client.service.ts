import { Injectable } from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {StrictHttpResponse} from "../../../services/strict-http-response";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {CommandeClientDto} from "../../../model/commande-client-dto";
import {BaseService} from "../../../services/base-service";
import {LigneCommandeClientDto} from "../../../model/ligne-commande-client-dto";

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {
  private baseUrl: string = "http://localhost:3000/commandesClients";

  constructor(
    private http: HttpClient,
    private base: BaseService,
  ) { }

  findAllResponse(): Observable<StrictHttpResponse<Array<CommandeClientDto>>> {
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
        return _r as StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }

  findAll(): Observable<Array<CommandeClientDto>> {
    return this.findAllResponse().pipe(
      map(_r => _r.body as Array<CommandeClientDto>)
    );
  }


  saveResponse(body?: CommandeClientDto): Observable<StrictHttpResponse<CommandeClientDto>> {
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
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  save(body?: CommandeClientDto): Observable<CommandeClientDto> {
    return this.saveResponse(body).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  deleteArticleResponse(params: CommandesclientsService.DeleteArticleParams): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    const url = `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&ligneCommandeClients.id=${params.idLigneCommande}`;
    let req = new HttpRequest<any>(
      'DELETE',
      url,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  deleteArticle(params: CommandesclientsService.DeleteArticleParams): Observable<CommandeClientDto> {
    return this.deleteArticleResponse(params).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  deleteResponse(idCommandeClient: number): Observable<StrictHttpResponse<null>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      `${this.base._rootUrl}${this.baseUrl}?ligneCommandeClients.id=${idCommandeClient}`,
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

  delete(idCommandeClient: number): Observable<null> {
    return this.deleteResponse(idCommandeClient).pipe(
      map(_r => _r.body as null)
    );
  }


  findByCodeResponse(codeCommandeClient: string): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}?code=${codeCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  findByCode(codeCommandeClient: string): Observable<CommandeClientDto> {
    return this.findByCodeResponse(codeCommandeClient).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  findAllLignesCommandesClientByCommandeClientIdResponse(idCommande: string): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}?id=${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }

  findAllLignesCommandesClientByCommandeClientId(idCommande: string): Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesClientByCommandeClientIdResponse(idCommande).pipe(
      map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }


  updateArticleResponse(params: CommandesclientsService.UpdateArticleParams): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    const url = `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&ligneCommandeClients.id=${params.idLigneCommande}&article.id=${params.idArticle}`;
    let req = new HttpRequest<any>(
      'PATCH',
      url,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  updateArticle(params: CommandesclientsService.UpdateArticleParams): Observable<CommandeClientDto> {
    return this.updateArticleResponse(params).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  updateClientResponse(params: CommandesclientsService.UpdateClientParams): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&client.id${params.idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  updateClient(params: CommandesclientsService.UpdateClientParams): Observable<CommandeClientDto> {
    return this.updateClientResponse(params).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  updateEtatCommandeResponse(params: CommandesclientsService.UpdateEtatCommandeParams): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&etatCommande=${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  updateEtatCommande(params: CommandesclientsService.UpdateEtatCommandeParams): Observable<CommandeClientDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  updateQuantiteCommandeResponse(params: CommandesclientsService.UpdateQuantiteCommandeParams): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&ligneCommandeClients.id=${params.idLigneCommande}&ligneCommandeClients.quantite=${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  updateQuantiteCommande(params: CommandesclientsService.UpdateQuantiteCommandeParams): Observable<CommandeClientDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }


  findByIdResponse(idCommandeClient: number): Observable<StrictHttpResponse<CommandeClientDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}?id=${idCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  findById(idCommandeClient: number): Observable<CommandeClientDto> {
    return this.findByIdResponse(idCommandeClient).pipe(
      map(_r => _r.body as CommandeClientDto)
    );
  }
}

module CommandesclientsService {


  export interface DeleteArticleParams {
    idLigneCommande: number;
    idCommande: number;
  }


  export interface UpdateArticleParams {
    idLigneCommande: number;
    idCommande: number;
    idArticle: number;
  }


  export interface UpdateClientParams {
    idCommande: number;
    idClient: number;
  }


  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }


  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}
