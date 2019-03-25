import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PacientesService } from '../servicios/pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public _pacientesService: PacientesService,
    private router: Router,
    private route: ActivatedRoute) {
    if (!_pacientesService.lsPacientes) {
      // _pacientesService.cargarPacientes();
    }
  }

  ngOnInit() { }

  applyFilter(filterValue: string) {
    this._pacientesService.lsPacientes.filter = filterValue.trim().toLowerCase();
    if (this._pacientesService.lsPacientes.paginator) {
      this._pacientesService.lsPacientes.paginator.firstPage();
    }
  }

  filaSeleccionada(row) {
  }

  // editarPaciente(p: Paciente) {
  //   this.router.navigate(['modificar', p.nom_usuario], { relativeTo: this.route });
  //   // this._pacientesService.redirectEditarPaciente(p);
  // }

  // eliminarPaciente(p: Paciente) {
  //   this._pacientesService.eliminarPaciente(p).subscribe(res => {
  //     if (res) {
  //       this._pacientesService.cargarPacientes();
  //     }
  //   });
  // }

  nuevoPaciente() {
    this.router.navigate(['crear'], { relativeTo: this.route });
  }

}
