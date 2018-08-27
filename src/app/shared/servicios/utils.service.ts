import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Solicitud } from '../../modulos/solicitudes/interfaces/Solicitud';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  urlServidor = 'http://localhost:3000/';
  urlSocket = 'http://localhost:1000/';
  cambioCargando = new BehaviorSubject<boolean>(false);
  private socket;
  obNuevaSolicitud: Observable<Solicitud>;

  constructor(private http: HttpClient) {
    this.cargarRutaServidor();
    this.socket = io.connect(this.urlSocket);

    this.obNuevaSolicitud = new Observable(observer => {
      this.socket.on('nuevaSolicitud', (data) => {
        observer.next(data);
      });
    });
  }

  private cargarRutaServidor() {
    if (!this.urlServidor) {
      this.http.get<any>('src/assets/config.json')
        .subscribe(config => {
          this.urlServidor = config.urlServidor;
          this.urlSocket = config.urlSocket;
        });
    }
  }

  mostrarCargando(flag: boolean) {
    this.cambioCargando.next(flag);
  }

}
