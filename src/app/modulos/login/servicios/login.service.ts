import { Injectable } from '@angular/core';
import { Credenciales } from '../interfaces/credenciales';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validarCredenciales(credenciales: Credenciales): Observable<any> {
    return this.http.post('http://localhost:3000/login', credenciales);
  }

}
