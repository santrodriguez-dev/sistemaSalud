import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent {

  mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sideNav: MatSidenav;
  private _mobileQueryListener: () => void;

  rutas: Ruta[] = [
    { url: 'home', nombre: 'Home', icono: 'home' },
    { url: 'pacientes', nombre: 'Pacientes', icono: 'accessibility' },
    { url: 'solicitudes', nombre: 'Solicitudes', icono: 'alarm' }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  sideNavToggle() {
    this.sideNav.toggle();
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['./']);
  }

}

interface Ruta {
  url: string;
  nombre: string;
  icono: string;
}
