import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

      private authService = inject(AuthService);

      isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
      }

      logout(): void {
        this.authService.clearToken();
      }

      isAdmin(): boolean {
        if (this.authService.getUserRole() === 'ROLE_ADMIN') {
          return true;
        } else {
          return false;
        }
      }
}
