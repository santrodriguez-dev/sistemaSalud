import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  public rutasServicios: RutasServicios = {
    urlServidor: 'https://accesibilidad-back-end.herokuapp.com/',
    urlSocket: 'https://accesibilidad-back-end.herokuapp.com/'
  };
  // public rutasServicios: RutasServicios = {
  //   urlServidor: 'http://localhost:3000/',
  //   urlSocket: 'http://localhost:3001/'
  // };

  constructor(private http: HttpClient) {
    this.cargarRutaServidor();
  }

  private cargarRutaServidor() {
    if (!this.rutasServicios) {
      this.http.get<RutasServicios>('src/assets/config.json')
        .subscribe(config => {
          this.rutasServicios = config;
        });
    }
  }

}

interface RutasServicios {
  urlServidor: string;
  urlSocket: string;
}
