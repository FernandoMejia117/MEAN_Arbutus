//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
//Modulos
import { SharedModule } from './shared/shared.module';
import { MadroMexicoModule } from './madro-mexico/madro-mexico.module';
import { MadroAdminModule } from './madro-admin/madro-admin.module';
import { FiltrosModule } from './filtros/filtros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MadroMexicoModule,
    MadroAdminModule,
    FiltrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
