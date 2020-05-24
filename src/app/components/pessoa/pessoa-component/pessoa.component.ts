import {Component, OnInit} from '@angular/core';
import {Pessoa} from "../../../model/pessoa";
import {PessoaService} from "../../../services/pessoa.service";
import {Page} from "../../../model/page";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Pessoa[];
  pessoaForm: FormGroup;

  constructor(private pessoaService: PessoaService,
              private formBuilder: FormBuilder) {

    this.pessoaForm = this.formBuilder.group({
      nomeCompleto: [null, Validators.required],
      cpf: [null, Validators.required],
      email: [null, Validators.required],
      telefone: [null, Validators.required],
      ativo: [true, Validators.required],

      endereco: this.formBuilder.array([
        this.formBuilder.group({
          cep: [null, Validators.required],
          rua: [null, Validators.required],
          numero: [null, Validators.required],
          complemento: [null],
          bairro: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required],
        })
      ])
    })

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.pessoaService.getAll().subscribe((resp: Page) => {
      this.pessoas = resp.content;
    })
  }

  onSubmit() {
    if (this.pessoaForm.valid) {
      this.pessoaService.addPessoa(this.pessoaForm.value)
        .subscribe(resp => {
        if (resp){
          alert('Pessoa salva com sucesso!')
          this.pessoaForm.reset();
        }
      }, error => {
        alert('Erro ao salvar nova pessoa: ' + error.error.message)
      })
    } else {
      alert('Formulário inválido.')
    }
  }

  getEndereco(event) {
    this.pessoaService.getEndereco(event.target.value)
      .subscribe(resp => {
        this.preencherEndereco(resp);
      }, error => {
        alert('CEP não encontrado.')
      })
  }

  preencherEndereco(endereco) {
    this.pessoaForm.patchValue({
      endereco: [{
        rua: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf,
      }]
    })
  }
}
