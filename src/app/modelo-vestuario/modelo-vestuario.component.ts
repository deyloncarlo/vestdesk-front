import { Component, OnInit } from '@angular/core';
import { ModeloVestuario } from "../entidades/modelo-vestuario";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FilterFormComponent } from "../filter-form/filter-form.component";

@Component({
  selector: 'app-modelo-vestuario',
  templateUrl: './modelo-vestuario.html',
  styles: ['./../../../node_modules/ag-grid/dist/styles/ag-grid.css']
})
export class ModeloVestuarioComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  public entity: ModeloVestuario;
  public columnDefs: Array<Object> = new Array();
  public rowData: Array<Object> = new Array();
  private gridApi;

  ngOnInit() {
    this.entity = new ModeloVestuario();
    this.columnDefs.push({ headerName: 'Descricao', field: 'descricao' });
    this.columnDefs.push({ headerName: 'Preco', field: 'preco' });
    this.rowData.push({ descricao: 'Teste', preco: 20 });
  }

  onGridReady(p_params) {
    this.gridApi = p_params.api;
    this.gridApi.sizeColumnsToFit();
  }

  novo(p_content) {
    this.modalService.open(p_content, { size: 'lg' }).result.then((result) => {
      let v_novo = Object.assign({}, result)
      this.gridApi.updateRowData({ add: [v_novo] });
    });
  }
}
