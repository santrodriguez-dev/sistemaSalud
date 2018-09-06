import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Solicitud } from '../../modulos/solicitudes/interfaces/Solicitud';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  rutasServicios: RutasServicios;
  cambioCargando = new BehaviorSubject<boolean>(false);
  private socket;
  obNuevaSolicitud: Observable<Solicitud>;

  constructor(private http: HttpClient) {
    this.cargarRutaServidor();
  }

  private cargarRutaServidor() {
    if (!this.rutasServicios) {
      this.http.get<RutasServicios>('src/assets/config.json')
        .subscribe(config => {
          this.rutasServicios = config;
          this.onLoadRoutes();
        });
    }
  }

  onLoadRoutes() {
    this.socket = io.connect(this.rutasServicios.urlSocket);
    this.obNuevaSolicitud = new Observable(observer => {
      this.socket.on('nuevaSolicitud', (data) => {
        observer.next(data);
      });
    });
  }

  mostrarCargando(flag: boolean) {
    this.cambioCargando.next(flag);
  }

}

interface RutasServicios {
  urlServidor: string;
  urlSocket: string;
}
