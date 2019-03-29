import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatBottomSheet, MatDialog, MatSnackBar } from '@angular/material';
import { SolicitudesService } from './services/solicitudes.service';
import { UtilsService } from '../../shared';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicalEmergency } from 'src/app/shared/models';
import { ManageMedicalEmergencyDialogComponent } from './manage-medical-emergency-dialog/manage-medical-emergency-dialog.component';
import { MedicalCentersService } from '../medical-centers/services/medical-centers.service';
import { MedicalCenter } from '../medical-centers/models/medicalCenter';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-reported-emergencies',
  templateUrl: './reported-emergencies.component.html',
  styleUrls: ['./reported-emergencies.component.css']
})
export class ReportedEmergenciesComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['paciente_id', 'descripcion', 'state', 'createdAt'];
  dataSource: MatTableDataSource<MedicalEmergency>;
  emergencies: MedicalEmergency[];
  medicalCenters: MedicalCenter[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subsObtSoli: Subscription;
  private emergencySocket$: Subscription;

  constructor(
    private medicalEmergencyService: SolicitudesService,
    private medicalCentersService: MedicalCentersService,
    private utilServ: UtilsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
    private socketService: SocketService,
    public dialog: MatDialog) {
    this.getAll();
    this.getAllMedicalCenters();
  }

  ngOnInit() {
    this.emergencySocket$ = this.socketService.onMedicalEmergencyCreated()
      .subscribe((message: any) => {
        this.getAll();
      });
  }

  getAll() {
    this.medicalEmergencyService.getAll().subscribe(emergencies => {
      this.dataSource = new MatTableDataSource(emergencies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getAllMedicalCenters() {
    this.medicalCentersService.getAll().subscribe(list => {
      this.medicalCenters = list;
    });
  }

  ngOnDestroy(): void {
    this.emergencySocket$.unsubscribe();
  }

  // EMITTER
  sendMessage(msg: string) {
    // this.socket.emit('sendMessage', { message: msg });
  }

  // cargarSolicitudes() {
  //   this.utilServ.mostrarCargando(true);
  //   this.solicitudesService.getAllSolicitudes().subscribe(lsSoli => {
  //     this.lsSolicitudes = new MatTableDataSource(lsSoli);
  //     this.lsSolicitudes.paginator = this.paginator;
  //     this.lsSolicitudes.sort = this.sort;
  //     this.utilServ.mostrarCargando(false);
  //   }, err => {
  //     this.utilServ.mostrarCargando(false);
  //     console.log('Ha ocurrido un error', err);
  //   });
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filaSeleccionada(row: MedicalEmergency) {
    this.router.navigate([row.id], { relativeTo: this.activatedRoute });
    // this.bottomSheet.open(BottomSheetSolicitudComponent, { data: row });
  }

  getStateMedicalEm(state: string) {
    switch (state) {
      case '1':
        return 'Atendido';
      default:
        return 'pendiente';
    }
  }

  openManageMedicalE(medicalEmergency: MedicalEmergency) {
    const dialogRef = this.dialog.open(ManageMedicalEmergencyDialogComponent, {
      width: '90vw',
      height: 'auto',
      maxHeight: '90vh',
      data: { medicalCenters: this.medicalCenters, medicalEmergency: Object.assign({}, medicalEmergency) }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAll();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}

