import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt4NvJtVZeAFY7Oc_JwbIkcoF7cOswOPk'
    })
  ],
  exports: [AgmCoreModule]
})
export class SharedModule { }
