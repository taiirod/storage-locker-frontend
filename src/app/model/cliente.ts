import {Endereco} from "./endereco";

export interface Cliente {

  id: number;
  nomeCompleto: string;
  cpf: string;
  endereco: Endereco[];
  telefone: string;
  email: string;
  ativo: boolean;


}
