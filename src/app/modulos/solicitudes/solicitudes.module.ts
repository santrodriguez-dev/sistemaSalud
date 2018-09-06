import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from './solicitudes.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared';
import { SolicitudesService } from './servicios/solicitudes.service';
import { InfoSolicitudComponent } from './info-solicitud/info-solicitud.component';

const routes: Routes = [
  { path: '', component: SolicitudesComponent },
  { path: ':id', component: InfoSolicitudComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  declarations: [SolicitudesComponent, InfoSolicitudComponent],
  exports: [RouterModule],
  providers: [SolicitudesService]
})
export class SolicitudesModule { }
