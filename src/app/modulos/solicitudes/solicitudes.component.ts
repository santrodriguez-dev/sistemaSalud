import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SolicitudesService } from './servicios/solicitudes.service';
import { Solicitud } from './interfaces/Solicitud';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paciente_id', 'categoria_id', 'clasificacion_id', 'descripcion'];
  lsSolicitudes: MatTableDataSource<Solicitud>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _solicitudesService: SolicitudesService) { }

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this._solicitudesService.getAllPacientes().subscribe(lsSoli => {
      this.lsSolicitudes = new MatTableDataSource(lsSoli);
      this.lsSolicitudes.sort = this.sort;
    });
  }

}
