import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from './solicitudes.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared';
import { SolicitudesService } from './servicios/solicitudes.service';
import { InfoSolicitudComponent } from './info-solicitud/info-solicitud.component';
import { BottomSheetSolicitudComponent } from './bottom-sheets/bottom-sheet-solicitud/bottom-sheet-solicitud.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', component: SolicitudesComponent },
  { path: ':id', component: InfoSolicitudComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt4NvJtVZeAFY7Oc_JwbIkcoF7cOswOPk'
    })
  ],
  entryComponents: [BottomSheetSolicitudComponent],
  declarations: [
    SolicitudesComponent,
    InfoSolicitudComponent,
    BottomSheetSolicitudComponent
  ],
  exports: [RouterModule],
  providers: [SolicitudesService]
})
export class SolicitudesModule { }
