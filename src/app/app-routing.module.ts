import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {PessoaComponent} from "./components/pessoa/pessoa-component/pessoa.component";


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: '', pathMatch: 'full', component: PessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
