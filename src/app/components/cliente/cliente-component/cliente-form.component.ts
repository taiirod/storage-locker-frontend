import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../model/cliente";
import {ClienteService} from "../../../services/cliente.service";
import {Page} from "../../../model/page";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CabecalhoService} from "../../../services/cabecalho.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import contains from "@popperjs/core/lib/dom-utils/contains";
import {writeErrorToLogFile} from "@angular/cli/utilities/log-file";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private clienteService: ClienteService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private cabecalhoService: CabecalhoService,
              private location: Location) {

    cabecalhoService.dadosCabecalho = {
      titulo: 'Adicionar Cliente',
      icone: '',
      rotaUrl: '/cliente/form',
    }

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
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.clienteService.addCliente(this.clienteForm.value)
        .subscribe(resp => {
          if (resp) {
            this.toastr.success('Cliente salvo com sucesso!', 'Sucesso');
            this.location.back();
          }
        }, error => {
          this.toastr.error(error.error.message, 'Erro');
        })
    } else {
      this.alertaCamposInvalidos();
    }
  }

  getEndereco(event) {
    this.clienteService.getEndereco(event.target.value)
      .subscribe(resp => {
        this.preencherEndereco(resp);
      }, error => {
        this.toastr.error('CEP não encontrado.', 'Erro');
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

  alertaCamposInvalidos() {
    Object.keys(this.clienteForm.controls).forEach(campo => {
      const c = this.clienteForm.get(campo);
      if (c.invalid && c !instanceof FormControl){
        this.toastr.warning(`Campo ${campo} é inválido`, 'Atenção');
      }
      if (c instanceof FormArray){
        c.controls.forEach((campo: FormGroup) => {
          Object.keys(campo.controls).forEach(a => {
            if (campo.get(a).invalid) {
              this.toastr.warning(`Campo ${a} é inválido`, 'Atenção');
            }
          })
        })
      }
    })
  }
}
