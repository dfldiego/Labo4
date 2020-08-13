import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donde-estamos', component: DondeEstamosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle-instrumento/:id', component: DetalleInstrumentoComponent },
  { path: 'lista', component: InstrumentoListaComponent },
  { path: 'admin/:id', component: InstrumentoAdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
