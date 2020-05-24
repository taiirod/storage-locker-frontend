import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = `${environment.urlApi}/pessoa`;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`${this.url}/todas`)
      .pipe(resp => {
        return resp;
      });
  }

  addPessoa (pessoa) {
    return this.http.post(`${this.url}/nova`, pessoa)
      .pipe(resp => {
        console.log(resp)
      return resp;
    })
  }

  getEndereco(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(resp => {
      return resp;
    })
  }


}
