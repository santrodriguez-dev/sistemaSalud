import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Paciente } from '../interfaces/paciente';
import { PacientesService } from '../servicios/pacientes.service';

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  registroPacForm: FormGroup;
  hidePass = true;

  constructor(private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    private _pacientesService: PacientesService) {
    this.registroPacForm = this.fb.group({
      nombre: ['', Validators.required],
      documento: [''],
      telefono: [''],
      direccion: [''],
      nom_usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.registroPacForm.invalid) {
      return;
    }
    this.crearPaciente(this.registroPacForm.value);
  }

  crearPaciente(paciente: Paciente) {
    this._pacientesService.crearPaciente(paciente).subscribe(resdb => {
      if (resdb === true) {
        this.registroPacForm.reset();
        this.openSnackBar('El paciente se ha registrado con éxito', '');
      } else {
        this.openSnackBar(resdb.toString(), 'Error');
      }
    }, err => {
      console.error(err);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
