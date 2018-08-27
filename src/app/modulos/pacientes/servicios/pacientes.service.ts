import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService, RespuestaServidor } from '../../../shared';
import { Paciente } from '../interfaces/paciente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient, private util: UtilsService) { }

  getAllPacientes(): Observable<Paciente[]> {
    return this.http.get<RespuestaServidor>(this.util.urlServidor + 'pacientes/getall').pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

  crearPaciente(paciente: Paciente): Observable<boolean> {
    return this.http.post<RespuestaServidor>(this.util.urlServidor + 'pacientes/new', paciente).pipe(map(res => {
      return res.satisfactorio;
    }));
  }

}
