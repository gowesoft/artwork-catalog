import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { selectToken } from '@features/auth/state/auth.selectors';
import { login, logout } from '@features/auth/state/auth.actions';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private store: Store,
    private router: Router
  ) { }

  getAuthenticated(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    const fakeApiResponse = { token: 'fake-token' };

    return of(fakeApiResponse).pipe(
      tap((response: any) => {
        this.store.dispatch(login({ user: credentials.username, token: response.token }));
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', credentials.username);
        this.authenticated.next(true);
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
    this.authenticated.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  storeLogin(): void {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
      this.store.dispatch(login({ user, token }));
      this.authenticated.next(true);
    }
  }

}
