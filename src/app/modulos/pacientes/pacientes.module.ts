import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PacientesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PacientesComponent],
  exports: [RouterModule]
})

export class PacientesModule { }
