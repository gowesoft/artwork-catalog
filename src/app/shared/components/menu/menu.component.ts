import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems: MenuItem[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Random',
        icon: 'pi pi-chart-bar',
        routerLink: '/random'
      }
    ];
  }

  onLogout(): void {
    this.authService.logout();
  }
}
