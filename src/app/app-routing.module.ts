import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio-component/inicio.component";
import {ClienteComponent} from "./components/cliente/cliente-component/cliente.component";


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: '', pathMatch: 'full', component: InicioComponent},
  {path: '**', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
