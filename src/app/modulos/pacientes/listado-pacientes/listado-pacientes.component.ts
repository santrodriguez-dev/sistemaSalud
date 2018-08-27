import { Component, OnInit, ViewChild } from '@angular/core';
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
  ];

  lsPacientes: MatTableDataSource<Paciente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _pacientesService: PacientesService,
    private utilServ: UtilsService) { }

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this._pacientesService.getAllPacientes().subscribe(lsPac => {
      this.lsPacientes = new MatTableDataSource(lsPac);
      this.lsPacientes.sort = this.sort;
      this.lsPacientes.paginator = this.paginator;
    }, err => {
      console.error(err);
    });
  }

  applyFilter(filterValue: string) {
    this.lsPacientes.filter = filterValue.trim().toLowerCase();
    if (this.lsPacientes.paginator) {
      this.lsPacientes.paginator.firstPage();
    }
  }

}
