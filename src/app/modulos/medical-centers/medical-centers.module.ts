import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalCentersComponent } from './medical-centers.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MedicalCentersComponent },
];
@NgModule({
  declarations: [MedicalCentersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicalCentersModule { }
