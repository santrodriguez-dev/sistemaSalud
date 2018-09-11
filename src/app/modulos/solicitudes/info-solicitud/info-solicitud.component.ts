import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudesService } from '../servicios/solicitudes.service';
import { Solicitud } from '../interfaces/Solicitud';
import { UtilsService } from '../../../shared';
import { GoogleMapsAPIWrapper, LatLngLiteral } from '@agm/core';
import { SeguimSolicitud } from '../interfaces/Seguim_Solicitud';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-info-solicitud',
  templateUrl: './info-solicitud.component.html',
  styleUrls: ['./info-solicitud.component.css']
})

export class InfoSolicitudComponent implements OnInit {

  public mapa: GoogleMapsAPIWrapper;

  id: number;
  solicitud: Solicitud;
  displayedColumns: string[] = ['id', 'diagnostico', 'observacion', 'createdAt'];
  seguimiento: MatTableDataSource<SeguimSolicitud>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    this._solicitudesService.obtenerSeguimientoSolicitud(this.id).subscribe(segui => {
      this.seguimiento = new MatTableDataSource(segui);
      this.seguimiento.paginator = this.paginator;
      this.seguimiento.sort = this.sort;
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

  mapReady(mapa: GoogleMapsAPIWrapper) {
    this.mapa = mapa;
  }

  localizarPaciente(): void {
    const ub: LatLngLiteral = {
      lat: this.solicitud.coordLat,
      lng: this.solicitud.coordLong
    };
    this.mapa.setCenter(ub);
    this.mapa.setZoom(15);
  }

  trazarRutaPaciente(): void { }

  filaSeleccionada(fila: SeguimSolicitud) { }

  applyFilter(filterValue: string) {
    this.seguimiento.filter = filterValue.trim().toLowerCase();
    if (this.seguimiento.paginator) {
      this.seguimiento.paginator.firstPage();
    }
  }

}
