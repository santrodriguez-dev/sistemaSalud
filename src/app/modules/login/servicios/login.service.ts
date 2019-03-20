import { Injectable } from '@angular/core';
import { Credenciales } from '../interfaces/credenciales';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaServidor, Usuario, RutasService } from '../../../shared';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlServices: string;

  constructor(private http: HttpClient,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  validarCredenciales(credenciales: Credenciales): Observable<Boolean> {
    return this.http.post<RespuestaServidor>(this.urlServices + 'usuarios/login', credenciales)
      .pipe(map(res => {
        if (res.satisfactorio) {
          if (res.resultado !== null) {
            this.saveSession(res.resultado);
            return true;
          }
        }
        return false;
      }));
  }

  private saveSession(us: Usuario) {
    localStorage.setItem('session', JSON.stringify(us));
  }

}
