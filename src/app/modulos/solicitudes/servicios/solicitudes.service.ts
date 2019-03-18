import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService, RespuestaServidor, RutasService } from '../../../shared';
import { Observable } from 'rxjs';
import { Solicitud } from '../interfaces/Solicitud';
import { map } from 'rxjs/operators';
import { SeguimSolicitud } from '../interfaces/Seguim_Solicitud';

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

  getAllSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<RespuestaServidor>(this.urlServices + 'solicitudes/getall').pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

  getSolicitud(idSolicitud: number): Observable<Solicitud> {
    return this.http.get<RespuestaServidor>(this.urlServices + 'solicitudes/get/' + idSolicitud).pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

  obtenerSeguimientoSolicitud(id: number): Observable<SeguimSolicitud[]> {
    return this.http.get<RespuestaServidor>(this.urlServices + 'seguimsolicitud/getall/' + id).pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

}
