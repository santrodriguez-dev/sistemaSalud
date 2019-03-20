import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-medical-center',
  templateUrl: './admin-medical-center.component.html',
  styleUrls: ['./admin-medical-center.component.css']
})
export class AdminMedicalCenterComponent implements OnInit {

  idMedicalCenter: string;
  modoEditable: boolean;
  medicalCenterForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar) {
    this.medicalCenterForm = this.fb.group({
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
      this.idMedicalCenter = params['id'];
      if (this.idMedicalCenter !== 'crear') {
        this.modoEditable = true;
        this.loadMedicalCenter();
      }
    });
  }

  loadMedicalCenter() {

  }

  submitForm() {
    if (this.medicalCenterForm.invalid) {
      return;
    }
    this.openSnackBar('Guardado con exito', '');
    if (!this.modoEditable) {
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

}
