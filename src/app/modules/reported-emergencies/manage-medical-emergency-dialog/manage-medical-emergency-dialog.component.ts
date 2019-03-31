import { Component, OnInit, Inject } from '@angular/core';
import { MedicalEmergency } from 'src/app/shared/models';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MedicalCenter } from '../../medical-centers/models/medicalCenter';
import { MedicalCentersService } from '../../medical-centers/services/medical-centers.service';
import { SolicitudesService } from '../services/solicitudes.service';

@Component({
  selector: 'app-manage-medical-emergency-dialog',
  templateUrl: './manage-medical-emergency-dialog.component.html',
  styleUrls: ['./manage-medical-emergency-dialog.component.scss']
})
export class ManageMedicalEmergencyDialogComponent implements OnInit {

  medicalEmergency: MedicalEmergency;
  medicalCenters: MedicalCenter[];
  medicalCenterSelected: number;
  doctorDescription: string;

  constructor(public dialogRef: MatDialogRef<ManageMedicalEmergencyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { medicalEmergency: MedicalEmergency, medicalCenters: MedicalCenter[] },
    private medicalEmergencyService: SolicitudesService,
    public snackBar: MatSnackBar) {

    this.medicalEmergency = data.medicalEmergency;
    this.medicalCenters = data.medicalCenters;
    this.calculateDistances();
  }

  ngOnInit() {
  }

  saveMedicalEmergency() {
    if (!this.medicalEmergency.medical_center_id) {
      this.openSnackBar('Por favor selecciona un centro de atención', '');
      return;
    }
    this.medicalEmergency.state = 'Asignado';
    this.medicalEmergency.doctor_description = this.doctorDescription;
    this.medicalEmergencyService.save(this.medicalEmergency).subscribe(res => {
      if (res) {
        this.openSnackBar('La emergencia ha sido atendida satisfactoriamente', '');
        this.dialogRef.close(true);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  selectMedicalCenter(medicalCenter: MedicalCenter) {
    this.medicalCenters.map(med => {
      med.selected = false;
    });
    medicalCenter.selected = true;
    this.medicalEmergency.medical_center_id = medicalCenter.id;
    // if(this.medicalCenterSelected){

    // }
    // this.medicalCenterSelected = medicalCenter.id;
    // medicalCenter.selected = !medicalCenter.selected;
  }

  calculateDistances() {
    let medicalCenterNear: MedicalCenter;
    let temp;
    for (const medCenter of this.medicalCenters) {
      if (!medCenter.coordLat && !medCenter.coordLong) {
        continue;
      }
      const x1 = this.medicalEmergency.coordLat;
      const y1 = this.medicalEmergency.coordLong;
      const x2 = medCenter.coordLat;
      const y2 = medCenter.coordLong;

      const intern = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
      const distance = Math.abs(Math.sqrt(intern));  // valor absoluto

      if (!temp) {
        temp = distance;
        medicalCenterNear = medCenter;
        continue;
      }

      if (distance < temp) {
        temp = distance;
        medicalCenterNear = medCenter;
        continue;
      }
    }

    if (medicalCenterNear) {
      medicalCenterNear.near = true;
      // medicalCenterNear.selected = true;
    }
  }

}
