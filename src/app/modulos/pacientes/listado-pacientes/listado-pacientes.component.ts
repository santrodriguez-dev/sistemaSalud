import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
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

  lsPacientes: Paciente[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _pacientesService: PacientesService, private utilServ: UtilsService) { }

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this._pacientesService.getAllPacientes().subscribe(lsPac => {
      this.lsPacientes = lsPac;
    }, err => {
      console.error(err);
    });
  }

}
