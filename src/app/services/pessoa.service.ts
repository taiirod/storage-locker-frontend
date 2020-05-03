import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = 'http://localhost:9090/pessoa/todas'

  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get(this.url).pipe(resp => {
      return resp;
    });
  }



}
