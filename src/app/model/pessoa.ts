import {Endereco} from "./endereco";

export interface Pessoa {

  // TODO criar model paginacao, que receba array de content
  id: number;
  nomeCompleto: string;
  cpf: string;
  endereco: Endereco[];
  telefone: string;
  email: string;
  ativo: boolean;


}
