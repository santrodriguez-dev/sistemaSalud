import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modulos/home/home.module#HomeModule' },
  { path: 'pacientes', loadChildren: './modulos/pacientes/pacientes.module#PacientesModule' },
  { path: 'solicitudes', loadChildren: './modulos/solicitudes/solicitudes.module#SolicitudesModule' },
  { path: 'login', loadChildren: './modulos/login/login.module#LoginModule' },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
