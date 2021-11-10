import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { InicioComponent } from './madro-mexico/pages/inicio/inicio.component';
import { CatalogoComponent } from './madro-mexico/pages/catalogo/catalogo.component';
import { NostrosComponent } from './madro-mexico/pages/nostros/nostros.component';
import { ContactoComponent } from './madro-mexico/pages/contacto/contacto.component';
import { LoginComponent } from './madro-mexico/pages/login/login.component';
import { Error404Component } from './madro-mexico/pages/error404/error404.component';
import { BuscadorComponent } from './filtros/pages/buscador/buscador.component';
import { ArbutusListaComponent } from './madro-admin/pages/arbutus-lista/arbutus-lista.component';
import { ArbutusVistaComponent } from './madro-admin/pages/arbutus-vista/arbutus-vista.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent,
   },
   {
    path: 'catalogo',
    component: CatalogoComponent,
   },
   {
    path: 'nosotros',
    component: NostrosComponent,
   },
   {
    path: 'contacto',
    component: ContactoComponent,
   },
   {
    path: 'buscador',
    component: BuscadorComponent,
   },


   //Prueba
   {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)

   },
   {
    path: 'admin',
    loadChildren: () => import('./madro-admin/madro-admin.module').then( m => m.MadroAdminModule)

   },

   //Fin de prueba
   {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full'
   },
   {
    path: '**',
    component: Error404Component,
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
