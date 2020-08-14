import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Instrumento } from '../entities/Instrumento';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {
  //instrumentosFile: any = (data as any).default;
  public instrumentosData: Instrumento[] = [];
  public instrumentoEncontrado: Instrumento;
  instrumentoAdminUrl: string = "http://localhost:3000/instrumento/";

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

  //Metodo GETALL()
  getInstrumentosFromDataBase() {
    return this.http.get("http://localhost:3000/instrumento/").pipe(map(instrumentosData => instrumentosData));
  }

  //Metodo GETONE()
  getInstrumentoFromDataBaseById(idx: string) {
    return this.http.get("http://localhost:3000/instrumento/" + idx).pipe(map(instrumentoEncontrado => {
      return instrumentoEncontrado;
    }));
  }

  //Metodo CREATE()
  newInstrumento(data: Instrumento): Observable<Instrumento> {
    return this.http.post<Instrumento>("http://localhost:3000/instrumento/", data);
  }

  //Metodo UPDATE()
  updateInstrumento(id: string, data: Instrumento): Observable<Instrumento> {
    return this.http.put<Instrumento>("http://localhost:3000/instrumento/" + id, data);
  }

  //Metodo DELETE()
  deleteInstrumento(idInstrumento: string) {
    return this.http.delete("http://localhost:3000/instrumento/" + idInstrumento).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  uploadFile(file: FormData, nombreImagen: string) {
    return this.http.post("http://localhost:3000/images/" + nombreImagen, file, { responseType: 'text' });
  }

}
