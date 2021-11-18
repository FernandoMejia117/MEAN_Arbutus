import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    NavegacionComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    NavegacionComponent,
    FooterComponent,
    SidebarComponent,
    MatCardModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule

  ]
})
export class SharedModule { }
