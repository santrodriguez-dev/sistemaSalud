import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from './solicitudes.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared';
import { SolicitudesService } from './servicios/solicitudes.service';

const routes: Routes = [
  { path: '', component: SolicitudesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  declarations: [SolicitudesComponent],
  exports: [RouterModule],
  providers: [SolicitudesService]
})
export class SolicitudesModule { }
