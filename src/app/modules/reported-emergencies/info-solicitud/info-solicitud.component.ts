import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../../shared';
import { GoogleMapsAPIWrapper, LatLngLiteral } from '@agm/core';
import { SeguimSolicitud } from '../interfaces/Seguim_Solicitud';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { SolicitudesService } from '../services/solicitudes.service';
import { MedicalEmergency } from 'src/app/shared/models';
import { MedicalCenter } from '../../medical-centers/models/medicalCenter';
import { ManageMedicalEmergencyDialogComponent } from '../manage-medical-emergency-dialog/manage-medical-emergency-dialog.component';
import { MedicalCentersService } from '../../medical-centers/services/medical-centers.service';

@Component({
  selector: 'app-info-solicitud',
  templateUrl: './info-solicitud.component.html',
  styleUrls: ['./info-solicitud.component.scss']
})

export class InfoSolicitudComponent implements OnInit {

  public mapa: GoogleMapsAPIWrapper;
  medicalCenters: MedicalCenter[];


  id: number;
  medicalEmergency: MedicalEmergency;
  displayedColumns: string[] = ['id', 'diagnostico', 'observacion', 'createdAt'];
  seguimiento: MatTableDataSource<SeguimSolicitud>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
    private medicalCentersService: MedicalCentersService,
    private medicalEmeService: SolicitudesService,
    private router: Router,
    private utilServ: UtilsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getMedicalEmergency();
    });
  }

  getMedicalEmergency() {
    this.medicalEmeService.get(this.id).subscribe(medicalEmergency => {
      this.medicalEmergency = medicalEmergency;
      if (!medicalEmergency.medicalCenter) {
        this.getAllMedicalCenters();
      }
    });
  }

  getAllMedicalCenters() {
    this.medicalCentersService.getAll().subscribe(list => {
      this.medicalCenters = list;
    });
  }

  cargarInfo() {
    this.getMedicalEmergency();
    // this.cargarSolicitud();
  }

  volverAtras() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  mapReady(mapa: GoogleMapsAPIWrapper) {
    this.mapa = mapa;
  }

  localizarPaciente(): void {
    const ub: LatLngLiteral = {
      lat: this.medicalEmergency.coordLat,
      lng: this.medicalEmergency.coordLong
    };
    this.mapa.setCenter(ub);
    this.mapa.setZoom(15);
  }

  trazarRutaPaciente(): void { }

  getAge(birthdate: Date) {
    return new Date().getFullYear() - new Date(birthdate).getFullYear()
  }

  filaSeleccionada(fila: SeguimSolicitud) { }

  applyFilter(filterValue: string) {
    this.seguimiento.filter = filterValue.trim().toLowerCase();
    if (this.seguimiento.paginator) {
      this.seguimiento.paginator.firstPage();
    }
  }

  openManageMedicalE() {
    const dialogRef = this.dialog.open(ManageMedicalEmergencyDialogComponent, {
      width: '90vw',
      height: 'auto',
      maxHeight: '90vh',
      data: {
        medicalCenters: this.medicalCenters,
        medicalEmergency: Object.assign({}, this.medicalEmergency)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getMedicalEmergency();
      }
    });
  }

}
