import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {ClienteService} from "./services/cliente.service";
import {HttpClientModule} from "@angular/common/http";
import {ClienteModule} from "./components/cliente/cliente.module";
import {LoginModule} from "./components/login/login.module";
import {InicioModule} from "./components/inicio/inicio.module";
import {CabecalhoComponent} from "./components/cabecalho/cabecalho.component";

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    ClienteModule,
    LoginModule,
    InicioModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
