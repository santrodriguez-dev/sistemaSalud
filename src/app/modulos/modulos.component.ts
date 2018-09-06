import { Component, ViewChild, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { UtilsService } from '../shared';
import { Subscription } from 'rxjs';
import { Solicitud } from './solicitudes/interfaces/Solicitud';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sideNav: MatSidenav;
  private _mobileQueryListener: () => void;
  private subsObtSoli: Subscription;
  lsNotificaciones: Solicitud[] = [];
  rutas: Ruta[] = [
    // { url: 'home', nombre: 'Home', icono: 'home' },
    { url: 'pacientes', nombre: 'Pacientes', icono: 'accessibility' },
    { url: 'solicitudes', nombre: 'Solicitudes', icono: 'alarm' }
  ];

  cargando = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private utilServ: UtilsService,
    private snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.utilServ.cambioCargando.subscribe(cargando => {
      this.cargando = cargando;
    });
  }

  ngOnInit(): void {
    this.subsObtSoli = this.utilServ.obNuevaSolicitud.subscribe(socket => {
      this.openSnackBar(`Se ha creado una nueva solicitud por ${socket.paciente_id}`, 'Exitoso');
      this.lsNotificaciones.push(socket);
    });
  }

  ngOnDestroy(): void {
    this.subsObtSoli.unsubscribe();
  }

  sideNavToggle() {
    this.sideNav.toggle();
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['./']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  cierraNotifi() {
    this.lsNotificaciones = [];
  }

}

interface Ruta {
  url: string;
  nombre: string;
  icono: string;
}
