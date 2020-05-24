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

  constructor() { }

  ngOnInit(): void {
  }
}
