import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared';

/**
 * Modulos no globales
 */
import { MatProgressBarModule } from '@angular/material/progress-bar';
/**
 * Submodulos de modulo principal
 */
import { HomeModule } from './home/home.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';

const routes: Routes = [
  {
    path: '', component: ModulosComponent, children: [
      { path: 'home', loadChildren: () => HomeModule },
      { path: 'pacientes', loadChildren: () => PacientesModule },
      { path: 'solicitudes', loadChildren: () => SolicitudesModule },
      { path: '**', redirectTo: 'home' }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatProgressBarModule
  ],
  declarations: [ModulosComponent],
  exports: [RouterModule]
})
export class ModulosModule { }
