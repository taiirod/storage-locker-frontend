import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio-component/inicio.component";
import {ClienteComponent} from "./components/cliente/cliente/cliente.component";
import {ClienteFormComponent} from "./components/cliente/cliente-component/cliente-form.component";
import {StorageComponent} from "./components/storage/storage/storage.component";


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/form', component: ClienteFormComponent},
  {path: 'locker', component: StorageComponent},
  {path: '', pathMatch: 'full', component: InicioComponent},
  {path: '**', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
