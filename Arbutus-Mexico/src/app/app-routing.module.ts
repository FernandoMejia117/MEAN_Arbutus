import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importar las Rutas de Dashboard
import { ArbutusListaComponent } from './dashboard/arbutus-lista/arbutus-lista.component'
import { ArbutusFormularioComponent } from './dashboard/arbutus-formulario/arbutus-formulario.component'
import { ArbutusVistazoComponent } from './dashboard/arbutus-vistazo/arbutus-vistazo.component'
//
const routes: Routes = [
  //dashboard
  {
  path: 'arbutusFotos',
  component: ArbutusListaComponent
  },
    {
    path: 'arbutusFotos/nuevo',
    component: ArbutusFormularioComponent
    },
    {
      path: 'arbutusFotos/:id',
      component: ArbutusVistazoComponent

    },
    {
      path:'',
      redirectTo: '/arbutusFotos',
      pathMatch: 'full'
    }
];
//index

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
