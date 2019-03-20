import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalCentersComponent } from './medical-centers.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminMedicalCenterComponent } from './admin-medical-center/admin-medical-center.component';

const routes: Routes = [
  { path: '', component: MedicalCentersComponent },
  { path: ':id', component: AdminMedicalCenterComponent },
];

@NgModule({
  declarations: [MedicalCentersComponent, AdminMedicalCenterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MedicalCentersModule { }
