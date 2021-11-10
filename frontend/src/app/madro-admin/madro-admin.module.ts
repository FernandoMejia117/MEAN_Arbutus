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



@NgModule({
  declarations: [
    FormularioComponent,
    ArbutusListaComponent,
    ArbutusVistaComponent,
    BuscadorComponent,
    PorPaisComponent,
    HomeComponent,
    InfoComponent,
    TablaComponent
  ],
  exports:[
    FormularioComponent,
    ArbutusListaComponent,
    ArbutusVistaComponent
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
