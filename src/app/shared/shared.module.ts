import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { ClinicHistoryComponent } from './components/clinic-history/clinic-history.component';
import { MaterialModule } from '.';

@NgModule({
  declarations: [ClinicHistoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt4NvJtVZeAFY7Oc_JwbIkcoF7cOswOPk'
    })
  ],
  exports: [AgmCoreModule],
  entryComponents: [ClinicHistoryComponent]
})
export class SharedModule { }
