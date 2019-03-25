import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { UtilsService, RutasService, RequestResult } from '../../../shared';
import { map, take } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
import { Patient } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  // obEditarPaciente = new BehaviorSubject<Paciente>(null);
  lsPacientes: MatTableDataSource<Patient>;
  urlServices: string;

  constructor(private http: HttpClient,
    private util: UtilsService,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  // cargarPacientes() {
  //   this.util.mostrarCargando(true);
  //   this.getAllPacientes().subscribe(reqRes => {

  //     this.lsPacientes = new MatTableDataSource(reqRes.result);
  //     this.util.mostrarCargando(false);
  //   }, err => {
  //     this.util.mostrarCargando(false);
  //     console.error(err);
  //   });
  // }

  getAll() {
    return this.http.get<RequestResult<Patient[]>>(this.urlServices + 'patient/getall').pipe(take(1), map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }


  save(patient: Patient) {
    return this.http.post<RequestResult<Patient>>(this.urlServices + 'patient/save', patient).pipe(take(1), map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }

  get(id: string) {
    return this.http.get<RequestResult<Patient>>(this.urlServices + 'patient/get/' + id).pipe(map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }

  delete(id: number) {
    return this.http.delete<RequestResult<any>>(this.urlServices + 'patient/delete/' + id).pipe(take(1), map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }

  actualizarPaciente(paciente: Patient) {
    return this.http.put<RequestResult<any>>(this.urlServices + 'patient/update/', paciente).pipe(take(1));
  }

  redirectEditarPaciente(p: Patient) {
    // this.obEditarPaciente.next(p);
  }

  private resolveResponse<T>(reqRes: RequestResult<T>) {
    if (!reqRes.successful) {
      console.error('PatientService', reqRes.message);
      throw new Error(reqRes.message);
    }
    return reqRes.result;
  }

}
