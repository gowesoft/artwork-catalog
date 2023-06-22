import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute  } from '@angular/router';

import { login } from './features/auth/state/auth.actions';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated!: boolean;

  constructor(
    private authService: AuthService
  ) {
    this.authService.getAuthenticated().subscribe((loggedIn) => {
      this.isAuthenticated = loggedIn;
    });
  }

  ngOnInit() {
    if (this.authService.getToken()) {
      this.authService.storeLogin();
    }
  }

}
