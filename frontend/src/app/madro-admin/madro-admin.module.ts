import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ArbutusListaComponent } from './pages/arbutus-lista/arbutus-lista.component';
import { ArbutusVistaComponent } from './pages/arbutus-vista/arbutus-vista.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PorPaisComponent } from './components/por-pais/por-pais.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComarosComponent } from './pages/formulario-comaros/formulario-comaros.component';
import { ComarosListaComponent } from './pages/comaros-lista/comaros-lista.component';
import { ComarosVistazoComponent } from './pages/comaros-vistazo/comaros-vistazo.component';

import { TablaComarosComponent } from './components/tabla-comaros/tabla-comaros.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { TablaArbutusComponent } from './components/tabla-arbutus/tabla-arbutus.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ArbutusListaComponent,
    ArbutusVistaComponent,
    BuscadorComponent,
    PorPaisComponent,
    HomeComponent,
    InfoComponent,
    TablaComponent,
    FormularioComarosComponent,
    ComarosListaComponent,
    ComarosVistazoComponent,
    TablaComarosComponent,
    FormularioRegistroComponent,
    TablaUsuariosComponent,
    TablaArbutusComponent,

  ],
  exports:[
    FormularioComponent,
    ArbutusListaComponent,
    ArbutusVistaComponent,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class MadroAdminModule { }
