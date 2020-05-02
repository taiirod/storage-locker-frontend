import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
