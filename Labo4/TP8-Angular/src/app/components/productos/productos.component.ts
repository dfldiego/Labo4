import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  instrumentosArr: any[] = [];
  constructor(private serviceInstrumentos: InstrumentosService, private router: Router) { }

  ngOnInit(): void {
    this.instrumentosArr = this.serviceInstrumentos.getInstrumentos();
    console.log(this.instrumentosArr);
  }

  public verInstrumento(idx: string) {
    this.router.navigate(['/detalle-instrumento/', idx]);
  }

}
