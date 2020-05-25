import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = `${environment.urlApi}/cliente`;

  constructor(private http: HttpClient) {
  }

  getAll(pagina: any) {
    return this.http.get(`${this.url}/todos?page=${pagina}`)
      .pipe(resp => {
        return resp;
      });
  }

  addCliente(pessoa) {
    return this.http.post(`${this.url}/novo`, pessoa)
      .pipe(resp => {
        return resp;
      })
  }

  getEndereco(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(resp => {
      return resp;
    })
  }


}
