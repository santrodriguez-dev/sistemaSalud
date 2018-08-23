import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  urlServidor = 'http://localhost:3000/';
  cargandoBar: boolean;

  constructor(private http: HttpClient) {
    this.cargarRutaServidor();
  }

  private cargarRutaServidor() {
    if (!this.urlServidor) {
      this.http.get<any>('src/assets/config.json')
        .subscribe(config => {
          this.urlServidor = config.urlServidor;
        });
    }
  }

  public mostrarCargando(flag: boolean) {
    this.cargandoBar = flag;
  }

}
