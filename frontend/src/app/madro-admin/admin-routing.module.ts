import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ArbutusListaComponent } from './pages/arbutus-lista/arbutus-lista.component';
import { ArbutusVistaComponent } from './pages/arbutus-vista/arbutus-vista.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [

    {
      path:'info',
      component: InfoComponent
    },
    {
      path:'subirArbuts',
      component: FormularioComponent
    },
    {
      path:'arbutusLista',
      component: ArbutusListaComponent
    },
    {
      path:'tabla',
      component: TablaComponent
    },
    {
      path:'arbutusVistazo/:id',
      component: ArbutusVistaComponent
    },
    {
      path: '**',
      redirectTo: 'info'
    }


  ]
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
