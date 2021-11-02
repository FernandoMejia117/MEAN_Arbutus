import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Arbutus
import {InicioComponent} from './components/inicio/inicio.component';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {FiltroComponent} from './components/filtro/filtro.component';
import {Filtro2Component} from './components/filtro2/filtro2.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {Catalogo2Component} from './components/catalogo2/catalogo2.component';
import {Catalogo3Component} from './components/catalogo3/catalogo3.component';
import {Error404Component} from './components/error404/error404.component';

//Admin
const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Catalogo', component: CatalogoComponent},
  { path: 'Filtro1', component: FiltroComponent},
  { path: 'Filtro2', component: Filtro2Component},
  { path: 'Nosotros', component: NosotrosComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Catalogo2', component: Catalogo2Component},
  { path: 'Catalogo3', component: Catalogo3Component},
  { path: '',   redirectTo: '/Inicio', pathMatch: 'full' },
  { path: '**', component:  Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
