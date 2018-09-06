import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Paciente } from '../interfaces/paciente';
import { PacientesService } from '../servicios/pacientes.service';
import { UtilsService } from '../../../shared';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent implements OnInit {

  displayedColumns: string[] = [
    'nombre',
    'documento',
    'nom_usuario',
    'telefono',
    'direccion',
    'foto',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // private _lsPacientes: MatTableDataSource<Paciente>;
  // @Input()
  // set lsPacientes(ls: MatTableDataSource<Paciente>) {
  //   ls.sort = this.sort;
  //   ls.paginator = this.paginator;
  //   this._lsPacientes = ls;
  // }

  // get lsPacientes(): MatTableDataSource<Paciente> {
  //   return this._lsPacientes;
  // }

  constructor(public _pacientesService: PacientesService) {
    _pacientesService.cargarPacientes();
  }

  ngOnInit() { }

  applyFilter(filterValue: string) {
    this._pacientesService.lsPacientes.filter = filterValue.trim().toLowerCase();
    if (this._pacientesService.lsPacientes.paginator) {
      this._pacientesService.lsPacientes.paginator.firstPage();
    }
  }

  filaSeleccionada(row) {
    // console.log(row);
  }

  editarPaciente(p: Paciente) {
    this._pacientesService.redirectEditarPaciente(p);
  }

  eliminarPaciente(p: Paciente) {
    this._pacientesService.eliminarPaciente(p).subscribe(res => {
      if (res) {
        this._pacientesService.cargarPacientes();
      }
    });
  }

}
