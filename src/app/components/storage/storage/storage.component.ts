import {Component, OnInit} from '@angular/core';
import {CabecalhoService} from "../../../services/cabecalho.service";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(private cabecalhoService: CabecalhoService,
  ) {

    cabecalhoService.dadosCabecalho = {
      titulo: 'Storage',
      icone: '',
      rotaUrl: '/lock',
    }
  }

  ngOnInit(): void {
  }

}
