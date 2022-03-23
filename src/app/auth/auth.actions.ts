import { UserModel } from './../models/user.model';
import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[Auth] Set User', props<{ user: UserModel }>());
export const unsetUser = createAction('[Auth] Unset User');
