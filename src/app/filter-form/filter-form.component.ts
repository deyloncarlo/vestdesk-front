import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { EditFormComponent } from "../edit-form/edit-form.component";

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  @Input() editFields;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.editFields);
  }

  novo() {
    debugger
    const modalRef = this.modalService.open(EditFormComponent);
    
    // modalRef.componentInstance.name = 'World';
  }

}
