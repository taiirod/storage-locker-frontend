import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {CabecalhoComponent} from './components/cabecalho/cabecalho.component';
import {MatCardModule} from "@angular/material/card";
import {PessoaService} from "./services/pessoa.service";
import {HttpClientModule} from "@angular/common/http";
import {PessoaModule} from "./components/pessoa/pessoa.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    CabecalhoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    PessoaModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
