import { Component, OnInit } from '@angular/core';
import { Paciente } from './interfaces/paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  lsPacientes: Paciente[];


  constructor() { }

  ngOnInit() { }

}
