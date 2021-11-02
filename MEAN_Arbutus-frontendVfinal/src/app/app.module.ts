import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { Filtro2Component } from './components/filtro2/filtro2.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { Catalogo2Component } from './components/catalogo2/catalogo2.component';
import { Catalogo3Component } from './components/catalogo3/catalogo3.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    NosotrosComponent,
    ContactoComponent,
    FiltroComponent,
    Filtro2Component,
    Error404Component,
    InicioComponent,
    NavegacionComponent,
    FooterComponent,
    Catalogo2Component,
    Catalogo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
