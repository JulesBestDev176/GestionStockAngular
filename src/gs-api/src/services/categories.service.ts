/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
@Injectable({
  providedIn: 'root',
})
class CategoriesService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/categories/all';
  static readonly savePath = '/gestiondestock/v1/categories/create';
  static readonly deletePath = '/gestiondestock/v1/categories/delete/{idCategory}';
  static readonly findByCodePath = '/gestiondestock/v1/categories/filter/{codeCategory}';
  static readonly findByIdPath = '/gestiondestock/v1/categories/{idCategory}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de chercher et renvoyer la liste des categories qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de chercher et renvoyer la liste des categories qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAll(): __Observable<Array<CategoryDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @param body undefined
   * @return L'objet category cree / modifie
   */
  saveResponse(body?: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @param body undefined
   * @return L'objet category cree / modifie
   */
  save(body?: CategoryDto): __Observable<CategoryDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idCategory undefined
   */
  deleteResponse(idCategory: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/categories/delete/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idCategory undefined
   */
  delete(idCategory: number): __Observable<null> {
    return this.deleteResponse(idCategory).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher une categorie par CODE
   *
   * Cette methode permet de chercher une categorie par son CODE
   * @param codeCategory undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCodeResponse(codeCategory: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/filter/${encodeURIComponent(String(codeCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par CODE
   *
   * Cette methode permet de chercher une categorie par son CODE
   * @param codeCategory undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCode(codeCategory: string): __Observable<CategoryDto> {
    return this.findByCodeResponse(codeCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Rechercher une categorie par ID
   *
   * Cette methode permet de chercher une categorie par son ID
   * @param idCategory undefined
   * @return La categorie a ete trouve dans la BDD
   */
  findByIdResponse(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par ID
   *
   * Cette methode permet de chercher une categorie par son ID
   * @param idCategory undefined
   * @return La categorie a ete trouve dans la BDD
   */
  findById(idCategory: number): __Observable<CategoryDto> {
    return this.findByIdResponse(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }
}

module CategoriesService {
}

export { CategoriesService }
