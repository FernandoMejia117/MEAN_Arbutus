import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NostrosComponent } from './pages/nostros/nostros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ArbutusListaComponent } from './components/arbutus-lista/arbutus-lista.component';
import { ArbutusVistazoComponent } from './components/arbutus-vistazo/arbutus-vistazo.component';
import { ComarosVistazoComponent } from './components/comaros-vistazo/comaros-vistazo.component';
import { ComarosListaComponent } from './components/comaros-lista/comaros-lista.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    InicioComponent,
    CatalogoComponent,
    NostrosComponent,
    ContactoComponent,
    Error404Component,
    LoginComponent,
    ArbutusListaComponent,
    ArbutusVistazoComponent,
    ComarosVistazoComponent,
    ComarosListaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule
  ]
})
export class MadroMexicoModule { }
