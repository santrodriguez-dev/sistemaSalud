import { Injectable } from '@angular/core';
import { MedicalCenter } from '../models/medicalCenter';
import { HttpClient } from '@angular/common/http';
import { RutasService, RequestResult } from 'src/app/shared';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicalCentersService {

  urlServices: string;

  constructor(private http: HttpClient,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  getAll() {
    return this.http.get<RequestResult<MedicalCenter[]>>(this.urlServices + 'medical-center/getall').pipe(take(1), map(reqRes => {
      return this.resolveResponse(reqRes);
    }));
  }

  private resolveResponse<T>(reqRes: RequestResult<T>) {
    if (!reqRes.successful) {
      console.error('PatientService', reqRes.message);
      throw new Error(reqRes.message);
    }
    return reqRes.result;
  }

}
