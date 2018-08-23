import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared';
import { PacientesService } from './servicios/pacientes.service';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';

const routes: Routes = [
  { path: '', component: PacientesComponent },
  { path: 'registro', component: RegistroPacientesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PacientesComponent, RegistroPacientesComponent, ListadoPacientesComponent],
  exports: [RouterModule],
  providers: [PacientesService]
})

export class PacientesModule { }
