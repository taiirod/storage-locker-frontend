import {Endereco} from "./endereco";

export interface Pessoa {

  // TODO criar model paginacao, que receba array de content
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  endereco: Endereco;
  telefone: string;
  email: string;
  ativo: boolean;


}
