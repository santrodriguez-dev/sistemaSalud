import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SolicitudesService } from './servicios/solicitudes.service';
import { Solicitud } from './interfaces/Solicitud';
import { UtilsService } from '../../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'paciente_id', 'categoria_id', 'clasificacion_id', 'descripcion', 'createdAt'];
  lsSolicitudes: MatTableDataSource<Solicitud>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subsObtSoli: Subscription;

  constructor(private _solicitudesService: SolicitudesService, private utilServ: UtilsService) { }

  ngOnInit() {
    this.cargarSolicitudes();
    this.subsObtSoli = this.utilServ.obNuevaSolicitud.subscribe(socket => {
      this.cargarSolicitudes();
    });
  }

  ngOnDestroy(): void {
    this.subsObtSoli.unsubscribe();
  }

  // EMITTER
  sendMessage(msg: string) {
    // this.socket.emit('sendMessage', { message: msg });
  }

  cargarSolicitudes() {
    this._solicitudesService.getAllSolicitudes().subscribe(lsSoli => {
      this.lsSolicitudes = new MatTableDataSource(lsSoli);
      this.lsSolicitudes.paginator = this.paginator;
      this.lsSolicitudes.sort = this.sort;
    }, err => {
      console.log('Ha ocurrido un error');
    });
  }

  applyFilter(filterValue: string) {
    this.lsSolicitudes.filter = filterValue.trim().toLowerCase();
    if (this.lsSolicitudes.paginator) {
      this.lsSolicitudes.paginator.firstPage();
    }
  }

}
