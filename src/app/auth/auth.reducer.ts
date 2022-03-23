import { UserModel } from './../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { setUser, unsetUser } from './auth.actions';

export interface State {
  user: UserModel | null;
}

export const initialState: State = {
  user: null,
};

const authInternalReducer = createReducer(initialState,

  on(setUser, (state, { user }) => ({ ...state, user})),
  on(unsetUser, (state => ({ ...state, user: null}))),

);

export function authReducer(state: any, action: any) {
    return authInternalReducer(state, action);
}
