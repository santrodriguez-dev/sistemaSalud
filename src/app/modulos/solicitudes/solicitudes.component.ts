import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SolicitudesService } from './servicios/solicitudes.service';
import { Solicitud } from './interfaces/Solicitud';
import { UtilsService } from '../../shared';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private _solicitudesService: SolicitudesService,
    private utilServ: UtilsService,
    private router: Router,
    private route: ActivatedRoute) { }

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
    this.utilServ.mostrarCargando(true);
    this._solicitudesService.getAllSolicitudes().subscribe(lsSoli => {
      this.lsSolicitudes = new MatTableDataSource(lsSoli);
      this.lsSolicitudes.paginator = this.paginator;
      this.lsSolicitudes.sort = this.sort;
      this.utilServ.mostrarCargando(false);
    }, err => {
      this.utilServ.mostrarCargando(false);
      console.log('Ha ocurrido un error', err);
    });
  }

  applyFilter(filterValue: string) {
    this.lsSolicitudes.filter = filterValue.trim().toLowerCase();
    if (this.lsSolicitudes.paginator) {
      this.lsSolicitudes.paginator.firstPage();
    }
  }

  filaSeleccionada(row: Solicitud) {
    console.log(row);
    this.router.navigate(['./', row.id], { relativeTo: this.route });
  }

}
