import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DondeEstamosComponent,
    ProductosComponent,
    DetalleInstrumentoComponent,
    InstrumentoListaComponent,
    InstrumentoAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
