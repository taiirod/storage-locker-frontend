import {Endereco} from "./endereco";

export interface Pessoa {

  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  endereco: Endereco;
  telefone: string;
  email: string;
  ativo: boolean;


}
