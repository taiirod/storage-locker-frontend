import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../model/cliente";
import {Page} from "../../../model/page";
import {CabecalhoService} from "../../../services/cabecalho.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private cabecalhoService: CabecalhoService) {

    cabecalhoService.dadosCabecalho = {
      titulo: 'Início',
      icone: '',
      rotaUrl: '/inicio',
    }
  }

  ngOnInit(): void {
  }
}
