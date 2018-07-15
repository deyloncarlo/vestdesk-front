import { Component, OnInit } from '@angular/core';
import { Material } from "../entidades/material";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  public entity: Material;
  public columnDefs: Array<Object> = new Array();
  public rowData: Array<Object> = new Array();
  private gridApi;

  ngOnInit() {
    this.entity = new Material();

    this.columnDefs.push(
      {
        headerName: '',
        field: '', 
        cellRenderer: function () {
          return '<i class="glyphicon glyphicon-pencil"></i>';
        },
        onCellClicked: function(p_paramns) {
          debugger
        }
      }
    );
    this.columnDefs.push({ headerName: 'Nome', field: 'nome' });
    this.columnDefs.push({ headerName: 'Preço', field: 'preco' });
    this.columnDefs.push({ headerName: 'Qtd Mínima', field: 'quantidadeMinima' });
    this.columnDefs.push({ headerName: 'Qtd Máxima', field: 'quantidadeMaxima' });
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
