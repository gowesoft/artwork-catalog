import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectToken } from '../../features/auth/state/auth.selectors';
import { of } from 'rxjs';

import { login, logout } from '../../features/auth/state/auth.actions';
import { Router } from '@angular/router';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    const fakeApiResponse = { token: 'fake-token' };

    return of(fakeApiResponse).pipe(
      tap((response: any) => {
        this.store.dispatch(login({ user: credentials.username, token: response.token }));
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', credentials.username);
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.pipe(
      select(selectToken),
      map((token: any) => Boolean(token))
    );
  }

  logout(): void {
    this.store.dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getToken(credentials: { username: string, password: string }) {
    return this.http.get<any>('https://fake-api.com/cd8befaf-9119-4379-b065-7845a416dc41/api/token')
      .pipe(
        tap(response => {
          this.store.dispatch(login({ user: credentials.username, token: response.token }));
        })
      );
  }

}
