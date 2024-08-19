import { Injectable } from '@angular/core';
import {BaseService} from "../../services/base-service";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {StrictHttpResponse} from "../../services/strict-http-response";
import {SavePhotoParams} from "../../model/save-photo-params";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseUrl: string = "http://localhost:3000/articles";

  constructor(
    private base: BaseService,
    private http: HttpClient,

  ) { }

  savePhotoResponse(params: SavePhotoParams): Observable<StrictHttpResponse<{}>> {
    let __params = this.base.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;


    if (params.file != null) { __formData.append('file', params.file as string | Blob);}

    let req = new HttpRequest<any>(
      'POST',
      `${this.base._rootUrl}${this.baseUrl}/${params.id}/${params.title}/${params.context}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as StrictHttpResponse<{}>;
      })
    );
  }

  savePhoto(params: SavePhotoParams): Observable<{}> {
    return this.savePhotoResponse(params).pipe(
      map(_r => _r.body as {})
    );
  }
}

