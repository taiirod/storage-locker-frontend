import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoaComponent} from "./pessoa-component/pessoa.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormDebugComponent} from "../../debug/form-debug/form-debug.component";


@NgModule({
  declarations: [
    PessoaComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PessoaModule {
}
