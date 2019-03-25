import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared';
import { PacientesService } from './servicios/pacientes.service';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { ClinicHistoryComponent } from './clinic-history/clinic-history.component';

const routes: Routes = [
  // { path: '', component: PacientesComponent },
  { path: '', component: PacientesComponent },
  { path: ':id', component: RegistroPacientesComponent },
  { path: 'crear', component: RegistroPacientesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PacientesComponent, RegistroPacientesComponent, ListadoPacientesComponent, ClinicHistoryComponent],
  exports: [RouterModule],
  providers: [PacientesService],
  entryComponents: [ClinicHistoryComponent]
})

export class PacientesModule { }
