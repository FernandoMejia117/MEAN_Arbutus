import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioFiltroComponent } from './components/inicio-filtro/inicio-filtro.component';
import { ListaArbuComponent } from './components/lista-arbu/lista-arbu.component';
import { ListacomarosComponent } from './components/listacomaros/listacomaros.component';
import { VistaArbuComponent } from './components/vista-arbu/vista-arbu.component'
import { VistacomarosComponent } from './components/vistacomaros/vistacomaros.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TablaArbuComponent } from './components/tabla-arbu/tabla-arbu.component';
import { TablaComarosComponent } from './components/tabla-comaros/tabla-comaros.component';
import { BuscadorComarostaComponent } from './components/buscador-comarosta/buscador-comarosta.component';
import { BuscadorArbutusComponent } from './components/buscador-arbutus/buscador-arbutus.component';

const routes: Routes = [{
  path: '',
  component: InicioFiltroComponent,
  children: [
    {
      path: 'BuscadorsArbutus',
      component: BuscadorArbutusComponent
    },
    {
      path: 'BuscadorComarostaphylis',
      component: BuscadorComarostaComponent
    },
    {
      path: 'TablaArbutus',
      component: TablaArbuComponent
    },
    {
      path: 'TablaComarostaphylis',
      component: TablaComarosComponent
    },
    {
      path: 'PorEstadoEspecie1',
      component: ListaArbuComponent
    },
    {
      path:'VistaArbutus/:id',
      component: VistaArbuComponent
    },
    {
      path: 'porEstadoEspecie2',
      component: ListacomarosComponent
    },
    {
      path: 'VistaComarostaphylis/:id',
      component: VistacomarosComponent
    },
    {
      path: 'mapa',
      component: MapaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
