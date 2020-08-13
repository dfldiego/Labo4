import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entities/Instrumento';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-instrumento-lista',
  templateUrl: './instrumento-lista.component.html',
  styleUrls: ['./instrumento-lista.component.css']
})
export class InstrumentoListaComponent implements OnInit {
  instrumentos: Instrumento[] = [];
  loading = true;

  constructor(private servicioInstrumento: InstrumentosService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.servicioInstrumento.getInstrumentosFromDataBase().subscribe(data => {
      //console.log(data);
      for (let instrumento in data) {
        //console.log(data[instrumento]);
        this.instrumentos.push(data[instrumento]);
      }
      this.loading = false;
      console.log(this.instrumentos);
    })
  }

  //DELETE()
  delete(idInstrumento: string) {
    debugger;
    var opcion = confirm("¿Esta seguro que desea eliminar el instrumento?");
    if (opcion == true) {
      this.servicioInstrumento.deleteInstrumento(idInstrumento).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }


  }
}