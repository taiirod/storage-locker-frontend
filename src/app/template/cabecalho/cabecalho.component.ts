import { Component, OnInit } from '@angular/core';
import {CabecalhoService} from "../../services/cabecalho.service";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private cabecalhoService: CabecalhoService) { }

  ngOnInit(): void {
  }

  get titulo () {
    return this.cabecalhoService.dadosCabecalho.titulo;
  }

  get icone () {
    return this.cabecalhoService.dadosCabecalho.titulo;
  }

  get rotaUrl () {
    return this.cabecalhoService.dadosCabecalho.titulo;
  }
}
