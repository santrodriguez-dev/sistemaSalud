import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Solicitud } from '../../modulos/solicitudes/interfaces/Solicitud';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  rutasServicios: RutasServicios = {
    urlServidor: 'http://localhost:3000/',
    urlSocket: 'http://localhost:1000/',
  };
  cambioCargando = new BehaviorSubject<boolean>(false);
  private socket;
  obNuevaSolicitud: Observable<Solicitud>;

  constructor(private http: HttpClient) {
    this.cargarRutaServidor();
    this.socket = io.connect(this.rutasServicios.urlSocket);

    this.obNuevaSolicitud = new Observable(observer => {
      this.socket.on('nuevaSolicitud', (data) => {
        observer.next(data);
      });
    });
  }

  private cargarRutaServidor() {
    if (!this.rutasServicios) {
      this.http.get<RutasServicios>('src/assets/config.json')
        .subscribe(config => {
          this.rutasServicios = config;
        });
    }
  }

  mostrarCargando(flag: boolean) {
    this.cambioCargando.next(flag);
  }

}

interface RutasServicios {
  urlServidor: string;
  urlSocket: string;
}
