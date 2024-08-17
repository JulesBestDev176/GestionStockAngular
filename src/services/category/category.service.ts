import {Injectable, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {CategoryDto} from "../../model/category-dto";
import {filter, map, Observable, of} from "rxjs";
import {StrictHttpResponse} from "../../services/strict-http-response";
import {BaseService} from "../../services/base-service";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  private baseUrl: string = "http://localhost:3000/category";
  user: UserModel | undefined;

  constructor(
    private authService: AuthService,
    private base: BaseService,
    private http: HttpClient,
    private router: Router
  ) {}


  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      console.error('Utilisateur non trouvé dans localStorage');
      this.router.navigate(['/login']);
    }
  }

  enregistrerCategory(categoryDto : CategoryDto): Observable<CategoryDto> {
      categoryDto.idEntreprise = this.user?.id;
      return this.save(categoryDto);
  }

  findAllCat(): Observable<CategoryDto[]> {
    return this.findAll();
  }

  findByIdCat(id: string): Observable<CategoryDto> {
    return this.findById(id);
  }

  deleteCat(selectedCategoryIdToDelete: string | undefined) : Observable<any> {
    if(selectedCategoryIdToDelete) {
      return this.delete(selectedCategoryIdToDelete);
    }
    return of();
  }



  // autres




  save(body?: CategoryDto): Observable<CategoryDto> {
    return this.saveResponse(body).pipe(
      map(_r => _r.body as CategoryDto)
    );
  }

  saveResponse(body?: CategoryDto): Observable<StrictHttpResponse<CategoryDto>> {
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
        return _r as StrictHttpResponse<CategoryDto>;
      })
    );
  }
  findAll(): Observable<Array<CategoryDto>> {
    return this.findAllResponse().pipe(
      map(_r => _r.body as Array<CategoryDto>)
    );
  }

  findAllResponse(): Observable<StrictHttpResponse<Array<CategoryDto>>> {
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
        return _r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  findById(idCategory: string): Observable<CategoryDto> {
    return this.findByIdResponse(idCategory).pipe(
      map(_r => _r.body as CategoryDto)
    );
  }

  findByIdResponse(idCategory: string): Observable<StrictHttpResponse<CategoryDto>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      `${this.base._rootUrl}${this.baseUrl}/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  modifierCategory(idCategory: string, categoryDto: CategoryDto) {
    return this.updateResponse(idCategory, categoryDto).pipe(
      map(_r => _r.body as CategoryDto)
    );
  }

  private updateResponse(idCategory: string, categoryDto: CategoryDto) {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categoryDto;
    let req = new HttpRequest<any>(
      'PUT',
      `${this.base._rootUrl}${this.baseUrl}/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<CategoryDto>;
      })
    );

  }

  delete(idCategory: string | undefined): Observable<null> {
    return this.deleteResponse(idCategory).pipe(
      map(_r => _r.body as null)
    );
  }

  deleteResponse(idCategory: string | undefined): Observable<StrictHttpResponse<null>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      `${this.base._rootUrl}${this.baseUrl}/${idCategory}`,
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


}
