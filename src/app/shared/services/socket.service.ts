import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { RutasService } from './rutas.service';
import { MedicalEmergency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  urlServices: string;

  constructor(private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  private socket;

  public initSocket(): void {
    this.socket = socketIo(this.urlServices);
  }

  public send(message: any): void {
    this.socket.emit('message', message);
  }

  public onMedicalEmergencyCreated() {
    return new Observable<MedicalEmergency>(observer => {
      this.socket.on('medicalEmergencyCreated', (data: MedicalEmergency) => observer.next(data));
    });
  }

  public onEvent(event: any): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}