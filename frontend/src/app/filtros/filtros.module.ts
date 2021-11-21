import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FiltrosRoutingModule } from './filtros-routing.module';
import { ListaArbuComponent } from './components/lista-arbu/lista-arbu.component';
import { VistaArbuComponent } from './components/vista-arbu/vista-arbu.component';
import { ListacomarosComponent } from './components/listacomaros/listacomaros.component';
import { VistacomarosComponent } from './components/vistacomaros/vistacomaros.component';
import { InicioFiltroComponent } from './components/inicio-filtro/inicio-filtro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { TablaArbuComponent } from './components/tabla-arbu/tabla-arbu.component';
import { TablaComarosComponent } from './components/tabla-comaros/tabla-comaros.component';
import { BuscadorArbutusComponent } from './components/buscador-arbutus/buscador-arbutus.component';
import { BuscadorComarostaComponent } from './components/buscador-comarosta/buscador-comarosta.component';
import { FilterPipe } from '../madro-admin/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterCormaPipe } from '../madro-admin/pipes/filter-corma.pipe';


@NgModule({
  declarations: [
    ListaArbuComponent,
    VistaArbuComponent,
    ListacomarosComponent,
    VistacomarosComponent,
    InicioFiltroComponent,
    MapaComponent,
    TablaArbuComponent,
    TablaComarosComponent,
    BuscadorArbutusComponent,
    BuscadorComarostaComponent,
    FilterPipe,
    FilterCormaPipe
  ],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FiltrosModule { }
