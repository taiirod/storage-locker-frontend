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
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CabecalhoComponent} from "./template/cabecalho/cabecalho.component";
import {NavegacaoComponent} from "./template/navegacao/navegacao.component";
import { StorageComponent } from './components/storage/storage/storage.component';
import {StorageModule} from "./components/storage/storage.module";

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    NavegacaoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,

    ClienteModule,
    LoginModule,
    InicioModule,
    StorageModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
