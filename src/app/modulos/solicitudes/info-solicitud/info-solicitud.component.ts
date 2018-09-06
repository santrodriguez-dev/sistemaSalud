import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudesService } from '../servicios/solicitudes.service';

@Component({
  selector: 'app-info-solicitud',
  templateUrl: './info-solicitud.component.html',
  styleUrls: ['./info-solicitud.component.css']
})
export class InfoSolicitudComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _solicitudesService: SolicitudesService) { }
  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarSeguimiento(this.id);
    });
  }

  cargarSeguimiento(id: number) {
    this._solicitudesService.obtenerSeguimientoSolicitud(id).subscribe(resp => {
      console.log(resp);
    }, err => console.log(err));
  }

}
