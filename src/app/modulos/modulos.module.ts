import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared';

// Submodulos de modulo principal
import { HomeModule } from './home/home.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: ModulosComponent, children: [
      { path: 'home', loadChildren: () => HomeModule },
      { path: 'pacientes', loadChildren: () => PacientesModule },
      { path: 'solicitudes', loadChildren: () => SolicitudesModule },
      { path: 'pruebas', component: PruebasComponent },
      { path: '**', redirectTo: 'pacientes' }

    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  declarations: [ModulosComponent, PruebasComponent],
  exports: [RouterModule]
})
export class ModulosModule { }
