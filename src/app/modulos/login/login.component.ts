import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from './servicios/login.service';
import { Credenciales } from './interfaces/credenciales';
import { RespuestaSevidor } from '../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    private _loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.validarCredenciales();
  }
  // convenience getter for easy access to form fields
  get f(): any { return this.loginForm.controls; }

  validarCredenciales() {
    const cred: Credenciales = {
      usuario: this.loginForm.value.username,
      contrasena: this.loginForm.value.password,
    };

    // this._loginService.validarCredenciales(cred)
    //   .subscribe(resp => {
    //     console.log(resp);
    //   });


    if (cred.usuario === 'santi123' && this.loginForm.value.password === 'santi123') {
      this.saveSession();
      this.router.navigate(['intro']);
      return;
    }
    this.openSnackBar('Usuario o contraseña inválidos', '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  saveSession() {
    localStorage.setItem('session', JSON.stringify(this.loginForm.value.username));
  }

}
