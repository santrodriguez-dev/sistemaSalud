import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  private idPaciente: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPaciente = params['id'];
      if (this.idPaciente) {
        this.modoEditable = true;
        this.cargarPaciente();
      }
    });
  }

  cargarPaciente() {
    this._pacientesService.cargarPaciente(this.idPaciente).subscribe(resBD => {
      this.registroPacForm.patchValue(resBD);
    });
  }

  onSubmit(regForm) {
    if (this.registroPacForm.invalid) {
      return;
    }
    if (!this.modoEditable) {
      this.crearPaciente(this.registroPacForm.value);
      return;
    }
    this.actualizarPaciente(this.registroPacForm.value);
  }

  resetForm(formDirective: FormGroupDirective) {
    if (this.modoEditable) {
      this.cargarPaciente();
      return;
    }
    this.registroPacForm.reset();
    formDirective.resetForm();
    // this.registroPacForm.dirty = false;
  }


  crearPaciente(paciente: Paciente) {
    this.utilServ.mostrarCargando(true);
    this._pacientesService.crearPaciente(paciente).subscribe(resdb => {
      if (resdb === true) {
        this.utilServ.mostrarCargando(false);
        this._pacientesService.cargarPacientes();
        this.volverAtras();
        this.openSnackBar('El paciente se ha registrado con éxito', '');
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
        this._pacientesService.cargarPacientes();
        this.volverAtras();
        this.openSnackBar('El paciente se ha actualizado con éxito', '');
      } else {
        this.utilServ.mostrarCargando(false);
        this.openSnackBar('No se ha podido actualizar el paciente', 'Error');
      }
    }, err => {
      console.error(err);
    });
  }

  volverAtras() {
    if (this.modoEditable) {
      this.router.navigate(['../../'], { relativeTo: this.route });
      return;
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  obtenerTitulo(): string {
    if (this.modoEditable) {
      return 'Modificar paciente';
    }
    return 'Crear paciente';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
