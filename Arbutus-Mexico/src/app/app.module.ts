import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './dashboard/navegacion/navegacion.component';
import { ArbutusFormularioComponent } from './dashboard/arbutus-formulario/arbutus-formulario.component';
import { ArbutusVistazoComponent } from './dashboard/arbutus-vistazo/arbutus-vistazo.component';
import { ArbutusListaComponent } from './dashboard/arbutus-lista/arbutus-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ArbutusFormularioComponent,
    ArbutusVistazoComponent,
    ArbutusListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
