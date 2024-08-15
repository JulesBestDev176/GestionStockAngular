import { Injectable } from '@angular/core';
import {ChangerMotDePasseDto} from "../../model/changer-mot-de-passe-dto";
import {UserModel} from "src/model/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : UserModel | null = null;
  private baseUrl: string = "http://localhost:3000/utilisateur";

  constructor(
    private http: HttpClient,
  ) { }





}
