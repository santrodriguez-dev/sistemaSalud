import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService, RutasService, RequestResult } from 'src/app/shared';
import { ClinicHistory } from 'src/app/shared/models';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClinicHistoryService {
  private urlServices: string;

  constructor(private http: HttpClient,
    private util: UtilsService,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  getByPatient(id: number) {
    return this.http.get<RequestResult<ClinicHistory[]>>(this.urlServices + 'clinic-history/getbyPatientId/' + id)
      .pipe(take(1), map(reqRes => {
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
