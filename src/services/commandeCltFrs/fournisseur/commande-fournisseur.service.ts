import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {BaseService} from "../../../services/base-service";
import {filter, map, Observable} from "rxjs";
import {StrictHttpResponse} from "../../../services/strict-http-response";
import {CommandeFournisseurDto} from "../../../model/commande-fournisseur-dto";
import {LigneCommandeFournisseurDto} from "../../../model/ligne-commande-fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {
  private baseUrl: string = "http://localhost:3000/commandesClients";

  constructor(
    private http: HttpClient,
    private base: BaseService,
  ) { }

  findAllResponse(): Observable<StrictHttpResponse<Array<CommandeFournisseurDto>>> {
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
        return _r as StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): Observable<Array<CommandeFournisseurDto>> {
    return this.findAllResponse().pipe(
      map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: CommandeFournisseurDto): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
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
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    return this.saveResponse(body).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `CommandefournisseurService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: CommandefournisseurService.DeleteArticleParams): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    const url = `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&ligneCommandeFournissuers.id=${params.idLigneCommande}`;
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
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandefournisseurService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: CommandefournisseurService.DeleteArticleParams): Observable<CommandeFournisseurDto> {
    return this.deleteArticleResponse(params).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param idCommandeFournisseur undefined
   */
  deleteResponse(idCommandeFournisseur: number): Observable<StrictHttpResponse<null>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      `${this.base._rootUrl}${this.baseUrl}?ligneCommandeFournisseurs.id=${idCommandeFournisseur}`,
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
  /**
   * @param idCommandeFournisseur undefined
   */
  delete(idCommandeFournisseur: number): Observable<null> {
    return this.deleteResponse(idCommandeFournisseur).pipe(
      map(_r => _r.body as null)
    );
  }

  /**
   * @param codeCommandeFournisseur undefined
   * @return successful operation
   */
  findByCodeResponse(codeCommandeFournisseur: string): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}?code=${codeCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param codeCommandeFournisseur undefined
   * @return successful operation
   */
  findByCode(codeCommandeFournisseur: string): Observable<CommandeFournisseurDto> {
    return this.findByCodeResponse(codeCommandeFournisseur).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurIdResponse(idCommande: number): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
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
        return _r as StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurId(idCommande: number): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLignesCommandesFournisseurByCommandeFournisseurIdResponse(idCommande).pipe(
      map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @param params The `CommandefournisseurService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleResponse(params: CommandefournisseurService.UpdateArticleParams): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    const url = `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&ligneCommandeFournisseurs.id=${params.idLigneCommande}&article.id=${params.idArticle}`;
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
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandefournisseurService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticle(params: CommandefournisseurService.UpdateArticleParams): Observable<CommandeFournisseurDto> {
    return this.updateArticleResponse(params).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `CommandefournisseurService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: CommandefournisseurService.UpdateEtatCommandeParams): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&etatCommande${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandefournisseurService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: CommandefournisseurService.UpdateEtatCommandeParams): Observable<CommandeFournisseurDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `CommandefournisseurService.UpdateFournisseurParams` containing the following parameters:
   *
   * - `idFournisseur`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateFournisseurResponse(params: CommandefournisseurService.UpdateFournisseurParams): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&fournisseur.id${params.idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandefournisseurService.UpdateFournisseurParams` containing the following parameters:
   *
   * - `idFournisseur`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateFournisseur(params: CommandefournisseurService.UpdateFournisseurParams): Observable<CommandeFournisseurDto> {
    return this.updateFournisseurResponse(params).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `CommandefournisseurService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: CommandefournisseurService.UpdateQuantiteCommandeParams): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      `${this.base._rootUrl}${this.baseUrl}?id=${params.idCommande}&ligneCommandeFournisseurs.id=${params.idLigneCommande}&ligneCommandeFournisseurs.quantite=${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandefournisseurService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: CommandefournisseurService.UpdateQuantiteCommandeParams): Observable<CommandeFournisseurDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param idCommandeFournisseur undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeFournisseur: number): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}?id=${idCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param idCommandeFournisseur undefined
   * @return successful operation
   */
  findById(idCommandeFournisseur: number): Observable<CommandeFournisseurDto> {
    return this.findByIdResponse(idCommandeFournisseur).pipe(
      map(_r => _r.body as CommandeFournisseurDto)
    );
  }
}


module CommandefournisseurService {

  /**
   * Parameters for deleteArticle
   */
  export interface DeleteArticleParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateArticle
   */
  export interface UpdateArticleParams {
    idLigneCommande: number;
    idCommande: number;
    idArticle: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateFournisseur
   */
  export interface UpdateFournisseurParams {
    idFournisseur: number;
    idCommande: number;
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}
