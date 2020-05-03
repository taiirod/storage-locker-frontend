import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = environment.urlApi + 'pessoa';

  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get(this.url + '/todas').pipe(resp => {
      return resp;
    });
  }





}
