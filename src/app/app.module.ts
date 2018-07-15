import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
<<<<<<< HEAD
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
=======
import { MaterialComponent } from './material/material.component';
import { FilterFormDirective } from './diretivas/filter-form.directive';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
>>>>>>> 3453ee80d01d86a67076db28f9678ba01b7f1d75

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuLateralComponent,
<<<<<<< HEAD
    FormaPagamentoComponent
=======
    MaterialComponent,
    FilterFormDirective,
    FilterFormComponent,
    EditFormComponent
>>>>>>> 3453ee80d01d86a67076db28f9678ba01b7f1d75
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditFormComponent
  ]
})
export class AppModule { }
