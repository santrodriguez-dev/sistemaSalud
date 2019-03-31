import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared';
import { InfoSolicitudComponent } from './info-solicitud/info-solicitud.component';
import { BottomSheetSolicitudComponent } from './bottom-sheets/bottom-sheet-solicitud/bottom-sheet-solicitud.component';
import { AgmCoreModule } from '@agm/core';
import { SolicitudesService } from './services/solicitudes.service';
import { ReportedEmergenciesComponent } from './reported-emergencies.component';
import { ManageMedicalEmergencyDialogComponent } from './manage-medical-emergency-dialog/manage-medical-emergency-dialog.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: ReportedEmergenciesComponent },
  { path: ':id', component: InfoSolicitudComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt4NvJtVZeAFY7Oc_JwbIkcoF7cOswOPk'
    })
  ],
  entryComponents: [BottomSheetSolicitudComponent, ManageMedicalEmergencyDialogComponent],
  declarations: [
    ReportedEmergenciesComponent,
    InfoSolicitudComponent,
    BottomSheetSolicitudComponent,
    ManageMedicalEmergencyDialogComponent
  ],
  exports: [RouterModule],
  providers: [SolicitudesService]
})
export class ReportedEmergenciesModule { }
