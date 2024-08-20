import {Injectable, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {BaseService} from "../base-service";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {ArticleDto} from "../../model/article-dto";
import {filter, map, Observable, of} from "rxjs";
import {StrictHttpResponse} from "../strict-http-response";
import {LigneCommandeClientDto} from "../../model/ligne-commande-client-dto";
import {LigneCommandeFournisseurDto} from "../../model/ligne-commande-fournisseur-dto";
import {LigneVenteDto} from "../../model/ligne-vente-dto";
import {CategoryService} from "../../services/category/category.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements OnInit{
  private baseUrl: string = "http://localhost:3000/articles";
  user: UserModel | undefined;

  constructor(
    private authService: AuthService,
    private base: BaseService,
    private http: HttpClient,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto> {
    articleDto.idEntreprise = this.authService.getUser()?.id;
    return this.save(articleDto)
  }

  findAllArticle(): Observable<ArticleDto[]> {
    return this.findAll();
  }

  findArticleById(id?: string): Observable<ArticleDto> {
    if(id) {
      return this.findById(id);
    }
    return of();
  }

  findCatArticle(id: string) {
    return !!this.findAllArticleByIdCategory(id);
  }

  deleteArt(id: string | undefined) : Observable<any> {
    if(id) {
      return this.delete(id);
    }
    return of();
  }

  findArticleByCode(codeArticle: string): Observable<ArticleDto> {
    return this.findByCodeArticle(codeArticle);
  }




  // autres

  modifierArticle(idArticle: string, articleDto: ArticleDto) {
    return this.updateResponse(idArticle, articleDto).pipe(
      map(_r => _r.body as ArticleDto)
    );
  }

  private updateResponse(idArticle: string, categoryDto: ArticleDto) {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categoryDto;
    let req = new HttpRequest<any>(
      'PUT',
    `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<ArticleDto>;
      })
    );

  }

  findAllResponse(): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json' as 'json'
      }
    );
    return this.http.request<any>(req).pipe(
      filter((response): response is HttpResponse<any> => response instanceof HttpResponse),
      map((response: HttpResponse<any>): StrictHttpResponse<Array<ArticleDto>> => {
        return response as StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }

  findAll(): Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      map(_r => _r.body as Array<ArticleDto>)
    );
  }


  saveResponse(body?: ArticleDto): Observable<StrictHttpResponse<ArticleDto>> {
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
        return _r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  save(body?: ArticleDto): Observable<ArticleDto> {
    return this.saveResponse(body).pipe(
      map(_r => _r.body as ArticleDto)
    );
  }


  deleteResponse(idArticle: string): Observable<StrictHttpResponse<null>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
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

  delete(idArticle: string): Observable<null> {
    return this.deleteResponse(idArticle).pipe(
      map(_r => _r.body as null)
    );
  }


  findAllArticleByIdCategoryResponse(idArticle: string): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }

  findAllArticleByIdCategory(idArticle: string): Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategoryResponse(idArticle).pipe(
      map(_r => _r.body as Array<ArticleDto>)
    );
  }


  findByCodeArticleResponse(codeArticle: string): Observable<StrictHttpResponse<ArticleDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}?codeArticle=${codeArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  findByCodeArticle(codeArticle: string): Observable<ArticleDto> {
    return this.findByCodeArticleResponse(codeArticle).pipe(
      map(_r => {
        const articles = _r.body as ArticleDto[];
        if (articles && articles.length > 0) {
          return articles[0];  // Retourner le premier article
        } else {
          throw new Error("Aucun article trouvé pour ce code");
        }
      })
    );
  }


  findHistoriaueCommandeClientResponse(idArticle: string): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
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

  findHistoriaueCommandeClient(idArticle: string): Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriaueCommandeClientResponse(idArticle).pipe(
      map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  findHistoriqueCommandeFournisseurResponse(idArticle: string): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
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

  findHistoriqueCommandeFournisseur(idArticle: string): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurResponse(idArticle).pipe(
      map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }


  findHistoriqueVentesResponse(idArticle: string): Observable<StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }

  findHistoriqueVentes(idArticle: string): Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesResponse(idArticle).pipe(
      map(_r => _r.body as Array<LigneVenteDto>)
    );
  }


  findByIdResponse(idArticle: string | undefined): Observable<StrictHttpResponse<ArticleDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  findById(idArticle: string | undefined): Observable<ArticleDto> {
    return this.findByIdResponse(idArticle).pipe(
      map(_r => _r.body as ArticleDto)
    );
  }
}
