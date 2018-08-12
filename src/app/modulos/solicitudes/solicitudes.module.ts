import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from './solicitudes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SolicitudesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SolicitudesComponent],
  exports: [RouterModule]
})
export class SolicitudesModule { }
