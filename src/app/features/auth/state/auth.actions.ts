import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ user: string, token: string }>()
);

export const logout = createAction('[Auth] Logout');
