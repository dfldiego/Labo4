import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { Instrumento } from 'src/app/entities/Instrumento';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {
  instrumento: Instrumento;

  constructor(private activatedRoute: ActivatedRoute, private instrumentosService: InstrumentosService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.instrumentosService.getInstrumentoFromDataBaseById(params['id']).subscribe(instrumentoEncontrado => {
        this.instrumento = instrumentoEncontrado as Instrumento;
        console.log(this.instrumento);
      });
    })

  }

  ngOnInit(): void {
  }

}
