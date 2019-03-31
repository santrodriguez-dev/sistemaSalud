import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared';
import { PacientesService } from './servicios/pacientes.service';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PacientesComponent, RegistroPacientesComponent],
  exports: [RouterModule],
  providers: [PacientesService],
})

export class PacientesModule { }
