import { Component, OnInit } from '@angular/core';
import { ModeloVestuario } from "../modelo-vestuario";

@Component({
  selector: 'app-modelo-vestuario',
  templateUrl: './modelo-vestuario.html',
  styles: []
})
export class ModeloVestuarioComponent implements OnInit {

  constructor() { }

  public entity: ModeloVestuario;
  
  ngOnInit() {
    this.entity = new ModeloVestuario ("Modelo 1", 10, 20, 23, 11);
  }

}
