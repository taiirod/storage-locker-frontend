import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteFormComponent} from "./cliente-component/cliente-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormDebugComponent} from "../../debug/form-debug/form-debug.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ClienteComponent} from './cliente/cliente.component';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {IConfig, NgxMaskModule} from "ngx-mask";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TableModule} from "primeng";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: true,
  };
};

@NgModule({
  declarations: [
    ClienteFormComponent,
    FormDebugComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(maskConfigFunction),
    MatPaginatorModule,
    TableModule,
  ]
})
export class ClienteModule {
}
