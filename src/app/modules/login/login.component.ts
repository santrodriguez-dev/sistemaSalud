import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from './servicios/login.service';
import { Credenciales } from './interfaces/credenciales';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  hide = true;
  cargando: boolean;

  constructor(private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    private _loginService: LoginService) {
    this.loginForm = this.fb.group({
      nom_usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get nom_usuario() { return this.loginForm.get('nom_usuario'); }
  get contrasena() { return this.loginForm.get('contrasena'); }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.validarCredenciales();
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.loginForm.controls; }

  validarCredenciales() {
    this.cargando = true;
    const cred: Credenciales = this.loginForm.value;

    this._loginService.validarCredenciales(cred)
      .subscribe(isLogged => {
        if (isLogged) {
          this.router.navigate(['intro']);
          this.cargando = false;
          return;
        }
        this.openSnackBar('Usuario o contraseña inválidos', '');
        this.cargando = false;
      }, err => {
        this.openSnackBar(err, '');
        this.cargando = false;
        console.log(err);
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
