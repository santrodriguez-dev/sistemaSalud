import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from './servicios/login.service';
import { Credenciales } from './interfaces/credenciales';
import { Credentials } from 'src/app/shared/interfaces/credentials';
import { Patient, UserAdministrator } from 'src/app/shared/models';

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
    private loginService: LoginService) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get user() { return this.loginForm.get('user'); }
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
    this.cargando = true;
    const cred: Credentials = this.loginForm.value;

    this.loginService.login(cred)
      .subscribe(reqRes => {
        this.cargando = false;
        if (!reqRes.successful) {
          this.openSnackBar(reqRes.message, '');
          return;
        }
        this.saveSession(reqRes.result);
        this.router.navigate(['']);
      }, err => {
        this.openSnackBar(err, '');
        console.log(err);
      });
  }

  private saveSession(patient: UserAdministrator) {
    localStorage.setItem('session', JSON.stringify(patient));
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
