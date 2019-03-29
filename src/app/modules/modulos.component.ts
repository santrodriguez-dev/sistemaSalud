import { Component, ViewChild, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { UtilsService } from '../shared';
import { Subscription } from 'rxjs';
import { UserAdministrator } from '../shared/models';
import * as socketIo from 'socket.io-client';
import { SocketService } from '../shared/services/socket.service';

export enum Action {
  JOINED,
  LEFT,
  RENAME
}

// Socket.io events
export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit, OnDestroy {

  user: UserAdministrator;
  mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sideNav: MatSidenav;
  private _mobileQueryListener: () => void;
  private subsObtSoli: Subscription;
  lsNotificaciones: any[] = [];
  routes: Route[] = [
    // { url: 'home', nombre: 'Home', icono: 'home' },
    { url: 'pacientes', name: 'Pacientes', icon: 'accessibility' },
    { url: 'emergencias', name: 'Emergecias Reportadas', icon: 'alarm' },
    { url: 'centros-salud', name: 'Centros de Salud', icon: 'local_hospital' }
  ];
  private emergencySocket$: Subscription;
  cargando = false;
  ioConnection: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private utilService: UtilsService,
    private socketService: SocketService,
    private snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = utilService.getUser();
    this.utilService.cambioCargando.subscribe(cargando => {
      this.cargando = cargando;
    });
    this.initIoConnection();
  }

  ngOnInit(): void {
    this.emergencySocket$ = this.socketService.onMedicalEmergencyCreated().subscribe(medicalEmergency => {
      const snackbar = this.snackBar.open(`Se ha reportado una nueva emergencia: "${medicalEmergency.patient_description}"`, '🚑 Reporte de emergencia', {
        duration: 10000,
        panelClass: ['medical-emergency-reported'],
      });
      snackbar.onAction().subscribe(act => {
        this.router.navigate(['/emergencias', medicalEmergency.id]);
      })
    });
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  ngOnDestroy(): void {
    this.emergencySocket$.unsubscribe();
  }

  sideNavToggle() {
    this.sideNav.toggle();
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,

    });
  }

  cierraNotifi() {
    // this.lsNotificaciones = [];
  }

}

interface Route {
  url: string;
  name: string;
  icon: string;
}
