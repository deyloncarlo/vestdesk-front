import { Component, OnInit } from '@angular/core';
import { ModeloVestuario } from "../modelo-vestuario";

@Component({
  selector: 'app-modelo-vestuario',
  templateUrl: './modelo-vestuario.html',
  styles: ['./../../../node_modules/ag-grid/dist/styles/ag-grid.css']
})
export class ModeloVestuarioComponent implements OnInit {

  constructor() { }

  public entity: ModeloVestuario;
  public columnDefs: Array<Object> = new Array();
  public rowData: Array<Object> = new Array();

  ngOnInit() {
    this.entity = new ModeloVestuario ("Modelo 1", 10, 20, 23, 11);
    this.columnDefs.push({headerName: 'Descricao', field: 'descricao'});
    this.columnDefs.push({headerName: 'Preco', field: 'preco'});
    this.rowData.push({descricao: 'Teste', preco: 20});
  }

}
