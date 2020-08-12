import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entities/Instrumento';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  instrumentosArr: Instrumento[] = [];
  loading = true;

  constructor(private serviceInstrumentos: InstrumentosService, private router: Router) { }

  ngOnInit(): void {
    this.serviceInstrumentos.getInstrumentosFromDataBase().subscribe(dataInstrumentos => {
      for (let instrumento in dataInstrumentos) {
        this.instrumentosArr.push(dataInstrumentos[instrumento]);
      }
      this.loading = false;
    })
    console.log(this.instrumentosArr)
  }

  public verInstrumento(idx: string) {
    this.router.navigate(['/detalle-instrumento/', idx]);
  }

}
