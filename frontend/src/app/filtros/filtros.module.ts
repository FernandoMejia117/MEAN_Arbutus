import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { PorEstadoComponent } from './pages/por-estado/por-estado.component';
import { VerEspecieComponent } from './pages/ver-especie/ver-especie.component';
import { AdminBuscadorComponent } from './pages/admin-buscador/admin-buscador.component';



@NgModule({
  declarations: [
    BuscadorComponent,
    PorEstadoComponent,
    VerEspecieComponent,
    AdminBuscadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FiltrosModule { }
