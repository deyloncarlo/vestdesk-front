import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
