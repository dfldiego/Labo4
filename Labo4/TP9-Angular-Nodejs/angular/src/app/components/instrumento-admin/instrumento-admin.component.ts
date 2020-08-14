import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/entities/Instrumento';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instrumento-admin',
  templateUrl: './instrumento-admin.component.html',
  styleUrls: ['./instrumento-admin.component.css']
})
export class InstrumentoAdminComponent implements OnInit {
  instrumento: Instrumento = {
    id: "",
    instrumento: "",
    marca: "",
    modelo: "",
    imagen: "",
    precio: 0,
    costoEnvio: "",
    cantidadVendida: 0,
    descripcion: ""
  };
  new = false;
  idInstrumento: string;
  resultadoOperacion = "";

  constructor(private servicioInstrumento: InstrumentosService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(parametros => {
      this.idInstrumento = parametros['id'];
      if (this.idInstrumento != "nuevo") {
        servicioInstrumento.getInstrumentoFromDataBaseById(this.idInstrumento)
          .subscribe((instrumentoEncontrado: any) => this.instrumento = instrumentoEncontrado.data as Instrumento);
        console.log(this.instrumento);
      } else {
        console.log("ES NUEVO");
      }
    });
  }

  ngOnInit(): void {
  }

  save() {
    //VALIDAR SI ES NUMERO
    if (!this.validarSiNumero(this.instrumento.precio)) {
      this.resultadoOperacion = ("Ingrese un numero para el precio.");
      return;
    } else {
      this.resultadoOperacion = ("");
    }
    if (!this.validarSiNumero(this.instrumento.cantidadVendida)) {
      this.resultadoOperacion = ("Ingrese un numero para la cantidad vendida.");
      return;
    } else {
      this.resultadoOperacion = ("");
    }

    //AGREGAR INSTRUMENTO
    if (this.idInstrumento === 'nuevo') {
      console.log('nuevo');
      this.servicioInstrumento.newInstrumento(this.instrumento).subscribe(data => {
        if (data) {
          this.resultadoOperacion = "Operación finalizada con exito";
          this.router.navigate(['/lista']);
        } else {
          this.resultadoOperacion = "Error en la operación, verifique los datos";
        }
      },
        error => console.error(error)
      );
    } else {
      //ACTUALIZAR INSTRUMENTO
      console.log(`Update ${this.idInstrumento}`);
      this.servicioInstrumento.updateInstrumento(this.idInstrumento, this.instrumento).subscribe((data: any) => {
        if (data) {
          this.resultadoOperacion = "Operación finalizada con exito";
          this.router.navigate(['/lista']);
          console.log(data);
        } else {
          this.resultadoOperacion = "Error en la operación, verifique los datos";
        }
      },
        error => console.error(error));
    }
  }

  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      id: "0",
      instrumento: "",
      marca: "",
      modelo: "",
      imagen: "",
      precio: 0,
      costoEnvio: "",
      cantidadVendida: 0,
      descripcion: ""
    });
  }

  validarSiNumero(numero: number): boolean {
    if (!/^([0-9])*$/.test(numero.toString()))
      return false;
    return true;
  }

  handleFileInput(files: FileList) {
    debugger;
    this.instrumento.imagen = files.item(0).name;
    const data: FormData = new FormData();
    data.append('file', files.item(0));
    // Llamo al servicio y realizo el upload de la imagen
    this.servicioInstrumento.uploadFile(data, this.instrumento.imagen).subscribe(res => {
      alert('Imagen cargada con éxito');
    }, error => {
      alert('Ocurrió un error al cargar la imagen, intenta nuevamente.');
      this.instrumento.imagen = '';
      console.log(error);
    });
  }
}
