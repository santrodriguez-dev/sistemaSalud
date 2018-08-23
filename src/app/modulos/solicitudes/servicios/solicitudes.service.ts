import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../../shared';
import { Observable } from 'rxjs';
import { Solicitud } from '../interfaces/Solicitud';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private http: HttpClient, private util: UtilsService) { }

  getAllPacientes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.util.urlServidor + 'solicitudes/getall').pipe(map(res => {
      return res;
    }));
  }

}
