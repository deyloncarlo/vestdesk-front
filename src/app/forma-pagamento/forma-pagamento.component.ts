import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from "../entidades/forma-pagamento";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent implements OnInit {


  constructor(private modalService: NgbModal) { }

  public entity: FormaPagamento;
  public columnDefs: Array<Object> = new Array();
  public rowData: Array<Object> = new Array();
  private gridApi;

  ngOnInit() {
    this.entity = new FormaPagamento();
    this.columnDefs.push({ headerName: 'Descricao', field: 'descricao' });
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
