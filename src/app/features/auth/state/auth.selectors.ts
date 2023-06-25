import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '@features/auth/state/auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => state?.token
);
