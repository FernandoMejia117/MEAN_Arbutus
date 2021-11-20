import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { InicioComponent } from './madro-mexico/pages/inicio/inicio.component';
import { CatalogoComponent } from './madro-mexico/pages/catalogo/catalogo.component';
import { NostrosComponent } from './madro-mexico/pages/nostros/nostros.component';
import { ContactoComponent } from './madro-mexico/pages/contacto/contacto.component';
import { Error404Component } from './madro-mexico/pages/error404/error404.component';
import { AuthGuard } from './guards/auth.guard';


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
   //Cargas Pesadas
   {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)

   },

   {
    path: 'admin',
    canActivate:[
            AuthGuard
    ],
    loadChildren: () => import('./madro-admin/madro-admin.module').then( m => m.MadroAdminModule)

   },
   {
     path: 'filtro',
     loadChildren: () => import('./filtros/filtros.module').then ( m => m.FiltrosModule)
   },
   //Fin de Cargas pesadas
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
