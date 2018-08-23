import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '../../../shared';
import { Paciente } from '../interfaces/paciente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient, private util: UtilsService) { }

  getAllPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.util.urlServidor + 'pacientes/getall').pipe(map(res => {
      return res;
    }));
  }

  crearPaciente(paciente: Paciente): Observable<boolean | string> {
    return this.http.post<boolean | string>(this.util.urlServidor + 'pacientes/new', paciente);
  }

}
