import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Paciente } from '../interfaces/paciente';
import { PacientesService } from '../servicios/pacientes.service';
import { UtilsService } from '../../../shared';

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  registroPacForm: FormGroup;
  modoEditable: boolean;
  hidePass = true;
  @Output() recargarPacientes: EventEmitter<any> = new EventEmitter();
  @Input() paciente: Paciente;

  constructor(private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    private _pacientesService: PacientesService,
    private utilServ: UtilsService) {
    this.registroPacForm = this.fb.group({
      nombre: ['', Validators.required],
      documento: [''],
      telefono: [''],
      direccion: [''],
      nom_usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  resetForm() {
    if (this.modoEditable) {
      this.registroPacForm.patchValue(this.paciente);
      return;
    }
    this.registroPacForm.reset();
    this.registroPacForm.clearValidators();
  }

  ngOnInit() {
    if (this.paciente) {
      this.registroPacForm.patchValue(this.paciente);
      this.modoEditable = true;
    }
  }

  onSubmit() {
    if (this.registroPacForm.invalid) {
      return;
    }
    if (!this.modoEditable) {
      this.crearPaciente(this.registroPacForm.value);
      return;
    }
    this.actualizarPaciente(this.registroPacForm.value);
  }

  crearPaciente(paciente: Paciente) {
    this.utilServ.mostrarCargando(true);
    this._pacientesService.crearPaciente(paciente).subscribe(resdb => {
      if (resdb === true) {
        this.registroPacForm.reset();
        this.utilServ.mostrarCargando(false);
        this.openSnackBar('El paciente se ha registrado con éxito', '');
        this.recargarPacientes.emit();
        this.registroPacForm.clearAsyncValidators();
      } else {
        this.utilServ.mostrarCargando(false);
        this.openSnackBar('No se ha podido registrar el paciente', 'Error');
      }
    }, err => {
      console.error(err);
    });
  }

  actualizarPaciente(paciente: Paciente) {
    this.utilServ.mostrarCargando(true);
    this._pacientesService.actualizarPaciente(paciente).subscribe(resdb => {
      if (resdb === true) {
        this.utilServ.mostrarCargando(false);
        this.openSnackBar('El paciente se ha actualizado con éxito', '');
        this.recargarPacientes.emit();
      } else {
        this.utilServ.mostrarCargando(false);
        this.openSnackBar('No se ha podido actualizar el paciente', 'Error');
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
