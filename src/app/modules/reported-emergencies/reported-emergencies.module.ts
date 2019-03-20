import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared';
import { InfoSolicitudComponent } from './info-solicitud/info-solicitud.component';
import { BottomSheetSolicitudComponent } from './bottom-sheets/bottom-sheet-solicitud/bottom-sheet-solicitud.component';
import { AgmCoreModule } from '@agm/core';
import { SolicitudesService } from './services/solicitudes.service';
import { ReportedEmergenciesComponent } from './reported-emergencies.component';

const routes: Routes = [
  { path: '', component: ReportedEmergenciesComponent },
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
    ReportedEmergenciesComponent,
    InfoSolicitudComponent,
    BottomSheetSolicitudComponent
  ],
  exports: [RouterModule],
  providers: [SolicitudesService]
})
export class ReportedEmergenciesModule { }
