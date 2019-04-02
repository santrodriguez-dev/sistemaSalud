import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService, RutasService, RequestResult } from '../../../shared';
import { map, take } from 'rxjs/operators';
import { MedicalEmergency } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private urlServices: string;

  constructor(private http: HttpClient,
    private util: UtilsService,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  getAll() {
    return this.http.get<RequestResult<MedicalEmergency[]>>(this.urlServices + 'medical-emergency/getall').pipe(take(1), map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }

  get(id: number) {
    return this.http.get<RequestResult<MedicalEmergency>>(this.urlServices + 'medical-emergency/get/' + id).pipe(take(1), map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }

  getByMedicalCenter(id: string) {
    return this.http.get<RequestResult<MedicalEmergency[]>>(this.urlServices + 'medical-emergency/getByMedicalCenter/' + id)
      .pipe(take(1), map(reqRes => {
        return this.resolveResponse(reqRes);
      }));
  }

  save(medicalEmergency: MedicalEmergency) {
    return this.http.post<RequestResult<MedicalEmergency>>(this.urlServices + 'medical-emergency/save', medicalEmergency)
      .pipe(take(1), map(reqRes => {
        return this.resolveResponse(reqRes);
      }));
  }

  getSolicitud(idSolicitud: number) {
    return this.http.get<RequestResult<any>>(this.urlServices + 'solicitudes/get/' + idSolicitud).pipe(take(1));
  }

  obtenerSeguimientoSolicitud(id: number) {
    return this.http.get<RequestResult<any>>(this.urlServices + 'seguimsolicitud/getall/' + id).pipe(take(1));
  }

  private resolveResponse<T>(reqRes: RequestResult<T>) {
    if (!reqRes.successful) {
      console.error('PatientService', reqRes.message);
      throw new Error(reqRes.message);
    }
    return reqRes.result;
  }


}
