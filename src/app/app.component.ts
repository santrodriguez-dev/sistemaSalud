import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sideNav: MatSidenav;
  private _mobileQueryListener: () => void;

  rutas: Ruta[] = [
    { url: 'home', nombre: 'Home', icono: 'home' },
    { url: 'pacientes', nombre: 'Pacientes', icono: 'accessibility' },
    { url: 'solicitudes', nombre: 'Solicitudes', icono: 'alarm' }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void { }

  sideNavToggle() {
    this.sideNav.toggle();
  }

}

interface Ruta {
  url: string;
  nombre: string;
  icono: string;
}
