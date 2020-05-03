import { Component, OnInit } from '@angular/core';
import {PessoaService} from "../../services/pessoa.service";
import {Pessoa} from "../../model/pessoa";
import {Page} from "../../model/page";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.pessoaService.getAll().subscribe((resp: Page) => {
      this.pessoas = resp.content;
      console.log(this.pessoas)
      console.log(resp)
    })
  }
}
