import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudesService } from '../servicios/solicitudes.service';
import { Solicitud } from '../interfaces/Solicitud';
import { UtilsService } from '../../../shared';

@Component({
  selector: 'app-info-solicitud',
  templateUrl: './info-solicitud.component.html',
  styleUrls: ['./info-solicitud.component.css']
})
export class InfoSolicitudComponent implements OnInit {

  id: number;
  solicitud: Solicitud;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor(private route: ActivatedRoute,
    private _solicitudesService: SolicitudesService,
    private router: Router,
    private utilServ: UtilsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarInfo();
    });
  }

  cargarSeguimiento() {
    this.utilServ.mostrarCargando(true);
    this._solicitudesService.obtenerSeguimientoSolicitud(this.id).subscribe(resp => {
      this.utilServ.mostrarCargando(false);
    }, err => {
      console.log(err);
      this.utilServ.mostrarCargando(false);
    });
  }

  cargarSolicitud() {
    this.utilServ.mostrarCargando(true);
    this._solicitudesService.getSolicitud(this.id).subscribe(resp => {
      this.solicitud = resp;
      this.utilServ.mostrarCargando(false);
    }, err => {
      console.log(err);
      this.utilServ.mostrarCargando(false);
    });
  }

  cargarInfo() {
    this.cargarSeguimiento();
    this.cargarSolicitud();
  }

  volverAtras() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
