import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../model/cliente";
import {ClienteService} from "../../../services/cliente.service";
import {Page} from "../../../model/page";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  clienteForm: FormGroup;

  constructor(private clienteService: ClienteService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) {

    this.clienteForm = this.formBuilder.group({
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
    this.clienteService.getAll().subscribe((resp: Page) => {
      this.clientes = resp.content;
      console.log(this.clientes)
    })
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.clienteService.addCliente(this.clienteForm.value)
        .subscribe(resp => {
          if (resp) {
            this.toastr.success('Cliente salvo com sucesso!', 'Sucesso');
            this.clienteForm.reset();
          }
        }, error => {
          this.toastr.error(error.error.message, 'Erro');
        })
    } else {
      this.toastr.warning('Formulário inválido.', 'Atenção');
    }
  }

  getEndereco(event) {
    this.clienteService.getEndereco(event.target.value)
      .subscribe(resp => {
        this.preencherEndereco(resp);
      }, error => {
        alert('CEP não encontrado.')
      })
  }

  preencherEndereco(endereco) {
    this.clienteForm.patchValue({
      endereco: [{
        rua: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf,
      }]
    })
  }
}
