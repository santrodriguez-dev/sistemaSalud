import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestResult, Usuario, RutasService } from '../../../shared';
import { take } from 'rxjs/operators';
import { Credentials } from 'src/app/shared/interfaces/credentials';
import { UserAdministrator } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlServices: string;

  constructor(private http: HttpClient,
    private routesService: RutasService) {
    this.urlServices = routesService.routes.urlServices;
  }

  login(credentials: Credentials) {
    return this.http.post<RequestResult<UserAdministrator>>(this.urlServices + 'user-admin/login', credentials).pipe(take(1));
  }

  // private saveSession(us: UserAdministrator) {
  //   localStorage.setItem('session', JSON.stringify(us));
  // }

}
