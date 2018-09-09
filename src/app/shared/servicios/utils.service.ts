import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Solicitud } from '../../modulos/solicitudes/interfaces/Solicitud';
import * as io from 'socket.io-client';
import { RutasService } from './rutas.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  cambioCargando = new BehaviorSubject<boolean>(false);
  private socket;
  obNuevaSolicitud: Observable<Solicitud>;

  constructor(private rutas: RutasService) {
    // this.socket = io.connect(this.rutas.rutasServicios.urlSocket);
    // // // this.obNuevaSolicitud = new Observable(observer => {
    // this.socket.on('nuevaSolicitud', (data) => {
    //   console.log(data);
    //   // observer.next(data);
    // });
    // });
  }

  mostrarCargando(flag: boolean) {
    this.cambioCargando.next(flag);
  }

}
