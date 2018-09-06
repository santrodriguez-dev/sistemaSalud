import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paciente } from './interfaces/paciente';
import { UtilsService } from '../../shared';
import { PacientesService } from './servicios/pacientes.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit, OnDestroy {

  lsPacientes: MatTableDataSource<Paciente>;
  tabIndex = 0;
  pacienteSeleccionado: Paciente;

  constructor(
    private _pacientesService: PacientesService,
    private utilServ: UtilsService) {
  }

  ngOnInit() {
    this._pacientesService.obEditarPaciente.subscribe(p => {
      if (p) {
        console.log(p);
        this.pacienteSeleccionado = p;
        this.tabIndex = 2;
      }
    });
  }

  ngOnDestroy(): void {
    // this._pacientesService.obEditarPaciente.unsubscribe();
  }

  recargarPacientes() {
    this._pacientesService.cargarPacientes();
    // this.cargarPacientes();
    this.tabIndex = 0;
  }

  cambioTab(tabIndex: number) {
    if (tabIndex !== 2) {
      this.pacienteSeleccionado = null;
    }
  }

}
