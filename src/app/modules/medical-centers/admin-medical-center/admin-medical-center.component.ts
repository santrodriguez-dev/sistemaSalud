import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MedicalCentersService } from '../services/medical-centers.service';
import { MedicalCenter } from '../models/medicalCenter';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MedicalEmergency } from 'src/app/shared/models';
import { SolicitudesService } from '../../reported-emergencies/services/solicitudes.service';

@Component({
  selector: 'app-admin-medical-center',
  templateUrl: './admin-medical-center.component.html',
  styleUrls: ['./admin-medical-center.component.scss']
})
export class AdminMedicalCenterComponent implements OnInit {

  medicalCenterId: string;
  modoEditable: boolean;
  medicalCenterForm: FormGroup;
  medicalCenter: MedicalCenter;
  public mapa: GoogleMapsAPIWrapper;
  dataSource: MatTableDataSource<MedicalEmergency>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['paciente_id', 'descripcion', 'doctor_descripcion', 'updatedAt'];


  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private medicalEmergencyService: SolicitudesService,
    private medicalCentersService: MedicalCentersService) {
    this.medicalCenterForm = this.fb.group({
      nombre: ['', Validators.required],
      documento: [''],
      telefono: [''],
      direccion: [''],
      nom_usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.medicalCenterId = params['id'];
      if (this.medicalCenterId !== 'crear') {
        this.modoEditable = true;
        this.loadInfo();
      }
    });
  }

  loadInfo() {
    this.getMedicalCenter();
    this.getMedicalEmergencies();
  }

  getMedicalEmergencies() {
    this.medicalEmergencyService.getByMedicalCenter(this.medicalCenterId).subscribe(list => {
      this.dataSource = new MatTableDataSource(list);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getMedicalCenter() {
    this.medicalCentersService.getWithEmergencies(this.medicalCenterId).subscribe(medicalCenter => {
      this.medicalCenter = medicalCenter;
    });
  }

  submitForm() {
    if (this.medicalCenterForm.invalid) {
      return;
    }
    this.openSnackBar('Guardado con exito', '');
    if (!this.modoEditable) {
    }
  }

  mapReady(mapa: GoogleMapsAPIWrapper) {
    this.mapa = mapa;
  }

  toLocate(): void {
    const ub = {
      lat: this.medicalCenter.coordLat,
      lng: this.medicalCenter.coordLong
    };
    this.mapa.setCenter(ub);
    this.mapa.setZoom(15);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

}
