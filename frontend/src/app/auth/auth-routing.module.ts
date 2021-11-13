import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path:'registro',
      component: RegistroComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    }
  ]
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
