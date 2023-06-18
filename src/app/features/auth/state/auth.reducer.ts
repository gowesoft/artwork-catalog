import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { AuthState } from './auth.state';

export const initialAuthState: AuthState = {
  user: null,
  token: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, { user, token }) => ({ ...state, user, token })),
  on(logout, state => ({ ...state, user: null, token: null }))
);
