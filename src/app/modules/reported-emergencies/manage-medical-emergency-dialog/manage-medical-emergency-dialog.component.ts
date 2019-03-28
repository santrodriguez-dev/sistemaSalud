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
  }

  ngOnInit() {
  }

  saveMedicalEmergency() {
    this.medicalEmergency.state = 'Asignado';
    this.medicalEmergency.doctor_description = this.doctorDescription;
    this.medicalEmergencyService.save(this.medicalEmergency).subscribe(res => {
      if (res) {
        this.openSnackBar('La emergencia ha sido atendida satisfactoriamente', '');
        this.dialogRef.close();
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

}
