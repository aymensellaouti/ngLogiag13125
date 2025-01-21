import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../dto/credentials.dto';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  // Gérer l'authentification du user
  login(credential: Credentials) {
    this.authService.login(credential).subscribe({
      next: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Merci de vérifier vos credentials')
      }
    })
  }
}
