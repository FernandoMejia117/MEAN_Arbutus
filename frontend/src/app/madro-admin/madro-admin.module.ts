import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ArbutusListaComponent } from './pages/arbutus-lista/arbutus-lista.component';

import { ArbutusVistaComponent } from './pages/arbutus-vista/arbutus-vista.component';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { PorPaisComponent } from './components/por-pais/por-pais.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './pages/info/info.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormularioComarosComponent } from './pages/formulario-comaros/formulario-comaros.component';
import { ComarosListaComponent } from './pages/comaros-lista/comaros-lista.component';
import { ComarosVistazoComponent } from './pages/comaros-vistazo/comaros-vistazo.component';
import { TablaComarosComponent } from './component/tabla-comaros/tabla-comaros.component';
import { BuscarComponent } from './services/buscar/buscar.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';
import { ComarosComponent } from './services/comaros/comaros.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ArbutusListaComponent,
    ArbutusVistaComponent,
    BuscadorComponent,
    PorPaisComponent,
    HomeComponent,
    InfoComponent,
    TablaComponent,
    FilterPipe,
    FormularioComarosComponent,
    ComarosListaComponent,
    ComarosVistazoComponent,
    TablaComarosComponent,
    BuscarComponent,
    Tabla2Component,
    ComarosComponent
  ],
  exports:[
    FormularioComponent,
    ArbutusListaComponent,
    ArbutusVistaComponent,
    ComarosListaComponent,
    ComarosVistazoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class MadroAdminModule { }
