import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Instrumento } from '../entities/Instrumento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {
  //instrumentosFile: any = (data as any).default;
  public instrumentosData: Instrumento[] = [];
  public instrumentoEncontrado: Instrumento;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
  }

  public getInstrumentos(): any[] {
    console.log(this.instrumentosData);
    return this.instrumentosData;
  }

  public getInstrumentoXId(idx: string): any {
    for (let instrumento of this.instrumentosData) {
      if (instrumento.id == idx) {
        return instrumento;
      }
    }
  }

  //---------------------------------------------------------------------------------------------------------
  //Metodo GETALL()
  getInstrumentosFromDataBase() {
    return this.http.get("http://localhost:3000/instrumento/").pipe(map(instrumentosData => instrumentosData));
  }

  //Metodo GETONE()
  getInstrumentoFromDataBaseById(idx: string) {
    return this.http.get("http://localhost:3000/instrumento/" + idx).pipe(map(instrumentoEncontrado => instrumentoEncontrado));
  }

  //---------------------------------------------------------------------------------------------------------



}
