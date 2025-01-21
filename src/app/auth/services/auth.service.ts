import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  constructor() { }

  // nous permet de nous logguer via l'api
  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.id)
      })
    );
  }

  logout() {
    localStorage.removeItem('token')
  }

  isAuthenticated(): boolean {
    return !! localStorage.getItem('token')
  }
}
