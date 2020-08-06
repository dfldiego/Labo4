import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/services/instrumentos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private serviceInstrumentos: InstrumentosService) { }

  ngOnInit(): void {
  }

}
