import { HTTP_INTERCEPTORS, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const token = localStorage.getItem('token') ?? '';
  if (authService.isAuthenticated()) {
    const authReq = req.clone({ setHeaders: { Authorization: token } });
    return next(authReq);
  }
  return next(req);
};

// export const authInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: NomClassInterceptor,
//   multi: true
// }
