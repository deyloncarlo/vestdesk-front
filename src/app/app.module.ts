import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MaterialComponent } from './material/material.component';
import { FilterFormDirective } from './diretivas/filter-form.directive';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuLateralComponent,
    MaterialComponent,
    FilterFormDirective,
    FilterFormComponent,
    EditFormComponent,
    FormaPagamentoComponent
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
