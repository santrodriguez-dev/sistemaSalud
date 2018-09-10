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

  constructor(private http: HttpClient,
    private util: UtilsService,
    private rutas: RutasService) { }

  getAllSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<RespuestaServidor>(this.rutas.rutasServicios.urlServidor + 'solicitudes/getall').pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

  getSolicitud(idSolicitud: number): Observable<Solicitud> {
    return this.http.get<RespuestaServidor>(this.rutas.rutasServicios.urlServidor + 'solicitudes/get/' + idSolicitud).pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

  obtenerSeguimientoSolicitud(id: number): Observable<SeguimSolicitud[]> {
    return this.http.get<RespuestaServidor>(this.rutas.rutasServicios.urlServidor + 'seguimsolicitud/getall/' + id).pipe(map(res => {
      if (res.satisfactorio) {
        return res.resultado;
      }
    }));
  }

}
