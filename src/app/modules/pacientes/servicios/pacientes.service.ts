import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UtilsService, RespuestaServidor, RutasService } from '../../../shared';
import { Paciente } from '../interfaces/paciente';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  obEditarPaciente = new BehaviorSubject<Paciente>(null);
  lsPacientes: MatTableDataSource<Paciente>;
  urlServices: string;

  constructor(private http: HttpClient,
    private util: UtilsService,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  cargarPacientes() {
    this.util.mostrarCargando(true);
    this.getAllPacientes().subscribe(lsPac => {
      this.lsPacientes = new MatTableDataSource(lsPac);
      this.util.mostrarCargando(false);
    }, err => {
      this.util.mostrarCargando(false);
      console.error(err);
    });
  }

  private getAllPacientes(): Observable<Paciente[]> {
    return this.http.get<RespuestaServidor>(this.urlServices + 'pacientes/getall').pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }


  cargarPaciente(idPaciente: string): Observable<Paciente[]> {
    return this.http.get<RespuestaServidor>(this.urlServices + 'pacientes/get/' + idPaciente).pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

  crearPaciente(paciente: Paciente): Observable<boolean> {
    return this.http.post<RespuestaServidor>(this.urlServices + 'pacientes/new', paciente).pipe(map(res => {
      return res.satisfactorio;
    }));
  }

  eliminarPaciente(paciente: Paciente): Observable<boolean> {
    return this.http.delete<RespuestaServidor>(this.urlServices + 'pacientes/delete/' + paciente.nom_usuario)
      .pipe(map(res => {
        return res.satisfactorio;
      }));
  }

  actualizarPaciente(paciente: Paciente): Observable<boolean> {
    return this.http.put<RespuestaServidor>(this.urlServices + 'pacientes/update/', paciente)
      .pipe(map(res => {
        return res.satisfactorio;
      }));
  }

  redirectEditarPaciente(p: Paciente) {
    this.obEditarPaciente.next(p);
  }

}
