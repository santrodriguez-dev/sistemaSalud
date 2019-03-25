import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PacientesService } from '../servicios/pacientes.service';
import { UtilsService } from '../../../shared';

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  patientForm: FormGroup;
  modoEditable: boolean;
  hidePass = true;
  private idPatient: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private patientService: PacientesService,
    private utilServ: UtilsService) {
    this.patientForm = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      identification: [''],
      name: [''],
      birthdate: [''],
      phone: [''],
      address: [''],
      photo: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPatient = params['id'];
      if (this.idPatient !== 'crear') {
        this.modoEditable = true;
        this.getPatient();
      }
    });
  }

  getPatient() {
    this.patientService.get(this.idPatient).subscribe(patient => {
      this.patientForm.patchValue(patient);
    });
  }

  onSubmit() {
    if (this.patientForm.invalid) {
      return;
    }

    this.utilServ.mostrarCargando(true);
    this.patientService.save(this.patientForm.value).subscribe(reqRes => {
      this.utilServ.mostrarCargando(false);
      this.volverAtras();
      this.openSnackBar('El paciente se ha almacenado con éxito', '');
    }, err => {
      this.utilServ.mostrarCargando(false);
      this.openSnackBar('No se ha podido almacenar el paciente', 'Error');
      // console.error(err);
    });
  }

  resetForm(formDirective: FormGroupDirective) {
    if (this.modoEditable) {
      this.getPatient();
      return;
    }
    this.patientForm.reset();
    formDirective.resetForm();
    // this.registroPacForm.dirty = false;
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
